import { Component } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { getDatabase } from 'firebase/database';
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-firebase-test',
  templateUrl: './firebase-test.component.html',
  styleUrls: ['./firebase-test.component.css'],
})
export class FirebaseTestComponent {

  courses: any

  app = initializeApp(environment.firebase);
  database = getDatabase(this.app);

  constructor(private db: AngularFireDatabase) {
    // const test1 = db.list("/courses").valueChanges().subscribe(data => {
    //   this.courses = data;
    //   console.log("result from db", this.courses);
    // });

    this.holamundo();
  }

  async holamundo() {
    const res = await this.db.list("/courses").valueChanges().subscribe(data => {
      this.courses = data;
      console.log("result from db", this.courses);
    });
  }
}
