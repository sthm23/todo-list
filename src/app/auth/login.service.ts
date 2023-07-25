import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login, LoginResponse, url } from '../models/interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(
    private http: HttpClient
  ) { }

  logIn(body:Login):Observable<LoginResponse> {
    return this.http.post<LoginResponse>(url+'/auth/token/login/', body);
  }

}
