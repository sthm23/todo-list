import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { LoginService } from 'src/app/auth/login.service';
import { login, logout } from 'src/app/redux/actions/todo.actions';
import { TodoState } from 'src/app/redux/reducers';
import { selectUserName } from 'src/app/redux/selectors/todo.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  userName$:Observable<string | null> = this.store.select(selectUserName)
  name = localStorage.getItem('user_name')
  constructor(
    private router: Router,
    private authServ: LoginService,
    private store: Store<{todo:TodoState}>
  ) { }

  ngOnInit(): void {
    const token = localStorage.getItem('user_token')
    const user = localStorage.getItem('user_name')
    if(user && token) {
      this.store.dispatch(login({ userName: user, token }));
    }
  }

  goToLogin() {
    this.store.dispatch(logout());
    localStorage.clear();
    this.authServ.isLogin = false
    this.router.navigate(['auth', 'login'])
  }
}
