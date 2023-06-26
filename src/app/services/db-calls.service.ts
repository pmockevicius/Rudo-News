import { Injectable } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment.development';
import { addDoc, getFirestore } from 'firebase/firestore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { EMPTY, Observable, OperatorFunction, expand, map, reduce, tap } from 'rxjs';
import { Department, DepartmentData, Post, PostResponse, User } from './interface';
import constants from '../constants';
import { IS_PUBLIC_API } from '../interceptors/http.auth.interceptor';


@Injectable({
  providedIn: 'root'
})
export class DBCallsService {
  constructor( private http: HttpClient) {}

  baseUrl = environment.appData.baseApiUrl

  //************** API CALS *****************/
  
  listPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.baseUrl}/posts/?title=asd&page=1`)
  }


  retrievePost(postId:string){
    return this.http.get<Post>(`${this.baseUrl}/posts/${postId}/`)
  }

  listFavoritePosts(pageNr: string): Observable<Post> {
    const params = new HttpParams().append('page', pageNr);
    // const headers = new HttpHeaders().set('Authorization', 'Bearer ' + this.getToken());
    return this.http.get<Post>(`${this.baseUrl}/posts/saved/`, {  params });
  }

  async retrieveLoggedInUserInfo(): Promise<User> {
    const response = await this.http.get<User>(`${this.baseUrl}/users/profile/`).toPromise();
    if (response === undefined) {
      throw new Error('User data not found.');
    }
    return response;
  }

  async saveFavoritePost(postId: string): Promise<User> {
    const response = await this.http.post<any>(`${this.baseUrl}/save-post/`, { post: postId }).toPromise();
    return response;
  }

  async deleteFavoritePost(postId: string): Promise<User> {
    const response = await this.http.delete<any>(`${this.baseUrl}/save-post/${postId}/remove/`).toPromise();
    return response;
  }

  getAllDepartments(): Promise<any[]> {
    return new Promise<any[]>((resolve, reject) => {
      const departments: any[] = [];
      let pageNr = 1;
      let result: any;
  
      const fetchDepartments = () => {
        const params = new HttpParams().append('page', pageNr.toString());
        this.http.get<DepartmentData>(`${this.baseUrl}/departments/`, { params }).subscribe((res) => {
          result = res;
          departments.push(...result.results);
          pageNr++;
          if (result.next) {
            fetchDepartments();
          } else {
            resolve(departments);
          }
        }, (error) => {
          reject(error);
        });
      };
  
      fetchDepartments();
    });
  }
  

  
  

 
  }








