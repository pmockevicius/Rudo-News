import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rudo_News';

  inicioForm = new FormGroup({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl('')
  })
}
