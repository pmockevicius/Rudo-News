import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-inicio-page',
  templateUrl: './inicio-page.component.html',
  styleUrls: ['./inicio-page.component.css'],
  encapsulation: ViewEncapsulation.None,

  

})
export class InicioPageComponent {

constructor(
  public _dbCallService: DBCallsService,
  public _authService: AuthService,
  public dialog: MatDialog, 
  private router: Router){


}

  hidePassword = true;
  inicioFormValue: any = {}

  inicioForm = new FormGroup({
    loginEmail: new FormControl('paulius3@rudo.es',[Validators.required]),
    loginPassword: new FormControl("12345678!Aa",[Validators.required])
  })

  onLoginPressed = () => {
    this.inicioFormValue = this.inicioForm.value;
    console.log("inicioFormValue", this.inicioForm.controls.loginEmail.value);
  
    let data: any = {
      login: this.inicioForm.controls.loginEmail.value,
      password: this.inicioForm.controls.loginPassword.value,
    };
  
    this._authService.loginUser(data.login, data.password).subscribe(
      (res) => {
        if (res) {
          this.router.navigate(['/noticias']);
        } 
      },
      (error) => {
        this.showErrorMessage("El mail o la contraseña son erróneos, vuelve a intentarlo");
      }
    );
  }
  

  onOlvidadoPressed=()=>{
    console.log("olvidado pressed")
  }

ngOnInit(){
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
