import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../../login.service';
import { ErrorMessage, Login } from 'src/app/models/interfaces';
import { EMPTY, catchError } from 'rxjs';

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
    private authServ:LoginService
  ) {}

  logIn() {
    if(this.form.valid) {
      const obj = this.form.value as Login;
      this.authServ.logIn(obj).pipe(
        catchError((err: ErrorMessage)=>{
          console.log(err);

          this.checkError = true
          return EMPTY
        })
      ).subscribe(item=>{
        console.log(item);

      })
    }
  }
}
