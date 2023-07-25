import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { ErrorMessage, Login } from 'src/app/models/interfaces';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  checkError = false

  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(4)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
  })

  constructor(
    private authServ:LoginService,
    private router: Router
  ) {}

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
        localStorage.setItem('user_name', item.username)
        localStorage.setItem('user_token', item.token)
        this.router.navigate(['home'])
      })
    }
  }
}
