import { Injectable } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';
import { addDoc, getFirestore } from 'firebase/firestore';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post, PostResponse } from './interface';


@Injectable({
  providedIn: 'root'
})
export class DBCallsService {



  noticias: any

  app = initializeApp(environment.firebase);
  database = getDatabase(this.app);
  firestore = getFirestore()




  constructor(private db: AngularFireDatabase, private http: HttpClient) {
  }

  baseUrl = 'https://academy.rudo.es'

  // async getAllNoticias(): Promise<any> {
  //   const res = await this.db.list("/noticias").valueChanges().subscribe(data => {
  //     this.noticias = data;
  //     console.log("result from db", this.noticias);
  //     return this.noticias
  //   });
  // }


  
  getPosts(): Observable<PostResponse> {
    return this.http.get<PostResponse>(`${this.baseUrl}/posts/?title=asd&page=1`)
  }

}
