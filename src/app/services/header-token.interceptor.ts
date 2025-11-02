import { HTTP_INTERCEPTORS, HttpEvent } from '@angular/common/http';
import { Injectable, Provider } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const TOKEN_HEADER_KEY = 'Authorization';

@Injectable()
export class HeaderTokenInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<Object>> {
    let authReq = req;
    const token = localStorage.getItem('user_token');
    if (token != null) {
      authReq = this.addTokenHeader(req, token);
    }

    return next.handle(authReq)
      .pipe(
          catchError(error => {
          return throwError(() => error);
        }
      )
    );
  }


  private addTokenHeader(request: HttpRequest<any>, token: string) {
    return request.clone({
      headers: request.headers.set(TOKEN_HEADER_KEY, 'Token ' + token)
    });
  }
}
export const INTERCEPTOR_PROVIDER:Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: HeaderTokenInterceptor,
  multi: true
}
