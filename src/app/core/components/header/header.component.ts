import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { login, logout } from 'src/app/redux/actions/todo.actions';
import { selectToken, selectUserName } from 'src/app/redux/selectors/todo.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName$:Observable<string | null> = of(null)
  token$:Observable<string | null> = of(null)

  logChecker = new BehaviorSubject<string | null>(localStorage.getItem('user_name'));

  constructor(
    private router: Router,
    private store: Store
  ) {
    this.userName$ = this.store.select(selectUserName)
    this.token$ = this.store.select(selectToken)
  }

  ngOnInit(): void {

    // this.logChecker.subscribe(item=>{
    //   this.text = item
    // })
  }

  goToLogin() {
    this.store.dispatch(logout());

    // this.logChecker.next(null)
    localStorage.clear();
    this.router.navigate(['auth', 'login'])
  }
}
