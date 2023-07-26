import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { ErrorMessage, Login } from 'src/app/models/interfaces';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { login } from 'src/app/redux/actions/todo.actions';
import { selectUserName } from 'src/app/redux/selectors/todo.selector';
import { TodoState } from 'src/app/redux/reducers';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  checkError = false

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private authServ:LoginService,
    private router: Router,
    private store: Store<{todo:TodoState}>
  ) {}

  ngOnInit(): void {
    const token = localStorage.getItem('user_token')
    const user = localStorage.getItem('user_name')
    if(user && token) {
      this.store.dispatch(login({ userName: user, token }));
    }
  }

  logIn() {
    if(this.form.valid) {
      const obj = this.form.value as Login;
      this.authServ.logIn(obj).pipe(
        catchError((err: ErrorMessage)=>{
          if(err.status === 400) {
            window.alert(err.error.message)
          }
          return throwError(()=>err)
        }),
      ).subscribe(item=>{
        this.store.dispatch(login({ userName: item.username, token: item.token }));
        localStorage.setItem('user_token', item.token)
        localStorage.setItem('user_name', item.username)
        this.authServ.isLogin = true
        this.router.navigate(['home'])
      })
    }
  }
}
