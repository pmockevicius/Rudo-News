import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';



@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css'],
  encapsulation: ViewEncapsulation.None,

  

})
export class InicioPageComponent {

constructor(public _dbCallService: DBCallsService,public dialog: MatDialog, private router: Router){

}

  hidePassword = true;
  inicioFormValue: any = {}

  inicioForm = new FormGroup({
    loginEmail: new FormControl('',[Validators.required]),
    loginPassword: new FormControl("",[Validators.required])
  })

   onLoginPressed = () =>{
this.inicioFormValue = this.inicioForm.value
console.log("inicioFormValue", this.inicioFormValue)
this.showErrorMessage("El mail o la contraseña son erróneos, vuelve a intentarlo")
  }

  onOlvidadoPressed=()=>{
    console.log("olvidado pressed")
  }

ngOnInit(){
  const noticias = this._dbCallService.getAllNoticias()
  .then((result) =>{console.log("result", result)})

  console.log("noticias",noticias) 
}


showErrorMessage(message: string) {
  const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
    data: { message: message, needCancelarButton: false, messageTitle: "", buttonText: "Aceptar" }
  });
}

navigateToRegistro(){
  this.router.navigate(['/registro'])
}

}
