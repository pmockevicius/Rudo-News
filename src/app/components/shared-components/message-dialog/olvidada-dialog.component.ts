import { Component, ViewEncapsulation, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-olvidada-dialog',
  templateUrl: './olvidada-dialog.component.html',
  styleUrls: ['./olvidada-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OlvidadaDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OlvidadaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _authService: AuthService,
  ) {
    this.dialogMessage = data.message;
    this.needCancelarButton = data.needCancelarButton;
    this.messageTitle = data.messageTitle
    this.buttonText = data.buttonText

  }


  dialogMessage: string;
  needCancelarButton: boolean;
  messageTitle: string
  buttonText: string
  // buttonPressed: string = ""


  onCloseClicked(buttonPressed: string): void {
    // console.log("button", this.buttonPressed)
    this.dialogRef.close(buttonPressed);
  }

  onCerrarConfirmed(buttonPressed: string){
    // this._authService.logoutUser().then((res)=>{
    //   console.log("logout", res)
    //   // localStorage.clear();
    // })
    // console.log("button", this.buttonPressed)
    this.onCloseClicked(buttonPressed)
    
    
  }

}
