import { Injectable } from '@angular/core';
import { HttpContextToken, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import constants from '../constants';
import { DBCallsService } from '../services/db-calls.service';
import { AuthService } from '../services/auth.service';
import { EMPTY } from 'rxjs';

export const IS_PUBLIC_API = new HttpContextToken<boolean>(() => false);

@Injectable()
export class HttpAuthInterceptor implements HttpInterceptor {
  constructor(
    public _dbCallService: DBCallsService,
    public _authService: AuthService,
    private router: Router
  ) {}

 

  expires_in = localStorage.getItem(constants.TOKEN_EXPIRES_IN_KEY);

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
 
    const token = this._authService.getToken();
    const refreshToken = this._authService.getRefreshToken();
    const isTokenValid = this._authService.isTokenValid();

    let headers = {};

    if (req.context.get(IS_PUBLIC_API)) {
console.log("test",req.context.get(IS_PUBLIC_API))

      console.log("its public")
      return next.handle(req);
    } else {
      if (token) {
        if (isTokenValid) {
          console.log('your token is valid');
          headers = {
            setHeaders: {
              Authorization: `Bearer ${token}`,
            },
          };
        } else {
          if (refreshToken) {
            console.log('token expired, sending refresh token');
            this._authService.refreshToken();
            headers = {
              setHeaders: {
                Authorization: `Bearer ${token}`,
              },
            };
          } else {
            console.log('refresh token does not exist, redirecting to /');
            this.router.navigate(['/']);
          }
        }
      } else {
        alert('Your session has expired, please log in to continue');
        this.router.navigate(['/']);
        return EMPTY
      }
      return next.handle(req.clone(headers));
    }

    }
}
