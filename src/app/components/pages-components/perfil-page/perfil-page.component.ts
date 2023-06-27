import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { User } from 'src/app/services/interface';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

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
    public _dbCallService: DBCallsService,
    public _authService: AuthService,
    private router: Router
  ){
    this._authService.retrieveLoggedInUserInfo().then((res) => {
      this.user = res; 
      this.userName = this.user.fullname; 
      this.userEmail = this.user.email; 

    });
  }



 dialogMessage: string = "Estás a punto de cerrar la sesión, ¿quieres continuar?";

  editarForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
  })


  cerrarSessionClicked(){ 
 this.handleLogout()
  }


handleLogout(){
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: { message: this.dialogMessage, needCancelarButton: true, messageTitle: "Cerrar sesión", buttonText: "Cerrar sesión" }
    }).afterClosed()
    .subscribe((buttonPressed)=>{
      if(buttonPressed === "Confirmed") {
        this._authService.logoutUser()
        this._authService.clearLocalStorage()
        this.redirectToLogin()
      } else {
        console.log("action was cancelled")
      }
    })
  }

  redirectToLogin(){
    this.router.navigate(["/"])
  }

}
