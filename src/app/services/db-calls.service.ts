import { Injectable } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment.development';
import { addDoc, getFirestore } from 'firebase/firestore';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Post, PostResponse } from './interface';
import constants from '../constants'


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


  }








