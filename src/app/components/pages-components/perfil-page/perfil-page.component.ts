import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent {

  constructor(public _dataSharingService: DataSharingService, public dialog: MatDialog){

  }

 dialogMessage: string = "Estás a punto de cerrar la sesión, ¿quieres continuar?";

  editarForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
  })

  user = this._dataSharingService.perfils[0]

  userName: string = this.user.nombre
  userEmail: string =this.user.mail

  cerrarSessionClicked(){
this.showConfirmationMessage()
  }

showConfirmationMessage(){
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: { message: this.dialogMessage, needCancelarButton: true, messageTitle: "Cerrar sesión", buttonText: "Cerrar sesión" }
    });

  }

}
