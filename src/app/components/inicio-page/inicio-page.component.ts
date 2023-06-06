import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css'],
  encapsulation: ViewEncapsulation.None,

  

})
export class InicioPageComponent {
  hidePassword = true;
  inicioFormValue: any = {}

  inicioForm = new FormGroup({
    loginEmail: new FormControl(''),
    loginPassword: new FormControl('')
  })

   onLoginPressed = () =>{
this.inicioFormValue = this.inicioForm.value

console.log("inicioFormValue", this.inicioFormValue)
  }

}
