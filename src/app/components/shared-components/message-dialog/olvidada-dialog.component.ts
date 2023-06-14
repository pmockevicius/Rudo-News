import { Component, ViewEncapsulation, Inject, Input } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-olvidada-dialog',
  templateUrl: './olvidada-dialog.component.html',
  styleUrls: ['./olvidada-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OlvidadaDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<OlvidadaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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


  onCloseClicked(): void {
    this.dialogRef.close();
  }

  onCerrarConfirmed(){
    console.log("Closing session!!!")
    this.onCloseClicked()
  }

}
