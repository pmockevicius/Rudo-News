import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { User } from 'src/app/services/interface';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent {

  user: any; 

  userName: string = ""
  userEmail: string =""

  constructor(
    public _dataSharingService: DataSharingService, 
    public dialog: MatDialog,
    public _dbCallService: DBCallsService
  ){
    this._dbCallService.retrieveLoggedInUserInfo().then((res) => {
      this.user = res; // Save the result to the user variable
      this.userName = this.user.fullname; // Use the user variable for further usage
      this.userEmail = this.user.email; // Use the user variable for further usage
      console.log(this.user)

    });
  }



 dialogMessage: string = "Estás a punto de cerrar la sesión, ¿quieres continuar?";

  editarForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
  })

  // user = this._dataSharingService.perfils[0]

  

  cerrarSessionClicked(){
this.showConfirmationMessage()
  }

showConfirmationMessage(){
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: { message: this.dialogMessage, needCancelarButton: true, messageTitle: "Cerrar sesión", buttonText: "Cerrar sesión" }
    });

  }

}
