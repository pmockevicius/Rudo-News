import { Injectable } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DBCallsService {



  noticias: any

  app = initializeApp(environment.firebase);
  database = getDatabase(this.app);

  constructor(private db: AngularFireDatabase) {
  }

  async getAllNoticias(): Promise<any> {
    const res = await this.db.list("/noticias").valueChanges().subscribe(data => {
      this.noticias = data;
      // console.log("result from db", this.noticias);
      return this.noticias
    });
  }


  // async callDb(): Promise<any> {
  //   try {
  //     const data = await this.db.list('/noticias').valueChanges()
  //     this.courses = data;
  //     console.log('result from db', this.courses);
  //     return data; // Return the retrieved data if needed
  //   } catch (error) {
  //     console.error('Error retrieving data from the database:', error);
  //     throw error; // Throw the error to handle it in the caller function
  //   }
  // }


}
