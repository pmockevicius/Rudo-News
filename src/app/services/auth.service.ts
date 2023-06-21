import { Injectable } from '@angular/core';
import { HttpClient, HttpContext, HttpContextToken, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Post, PostResponse } from './interface';
import constants from '../constants'
import { environment } from 'src/environments/environment.development';
import { IS_PUBLIC_API } from '../interceptors/http.auth.interceptor';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  baseUrl = environment.appData.baseApiUrl

  loginUser(login: string, password: string): Observable<any> {
    const data = {
      grant_type: environment.appData.grant_type,
      client_id: environment.appData.client_id,
      client_secret: environment.appData.client_secret,
      username: login,
      password: password
    };
        

    return this.http.post<any>(`${this.baseUrl}/auth/token`, data, {
      context: new HttpContext().set(IS_PUBLIC_API, true)
    })
      .pipe(
        tap(response => {
          const {access_token, refresh_token, expires_in} = response; 
          this.setTokens(access_token, refresh_token, expires_in);
        })
      );
  }
  

  setTokens(token: string, refreshToken: string, expires_in: string): void {
    let currentTime = this.getCurrentTime()

    localStorage.setItem(constants.TOKEN_KEY, token);
    localStorage.setItem(constants.REFRESH_TOKEN_KEY, refreshToken);
    localStorage.setItem(constants.TOKEN_EXPIRES_IN_KEY, currentTime + expires_in);
  }
  
  getToken(): string | null {
    return localStorage.getItem(constants.TOKEN_KEY);
  }

  getTokenExpiryTime() {
     let expiryTimeString = localStorage.getItem(constants.TOKEN_EXPIRES_IN_KEY)
     return expiryTimeString ? parseInt(expiryTimeString) : 0;
  }

  getRefreshToken(){
    return localStorage.getItem(constants.REFRESH_TOKEN_KEY)
  }

  getCurrentTime(){
    return (Math.floor((new Date).getTime() / 1000))
  }

  isTokenValid(){
    return this.getTokenExpiryTime() > this.getCurrentTime()
  }

  refreshToken(){


  }

}
