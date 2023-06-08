import { Component, ViewEncapsulation, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-olvidada-dialog',
  templateUrl: './olvidada-dialog.component.html',
  styleUrls: ['./olvidada-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class OlvidadaDialogComponent {
  // testEmail: string = 'labas@labas.es';
  dialogMessage: string;

  // inicioForm = new FormGroup({
  //   olvidEmail: new FormControl('')
  // })

  constructor(
    public dialogRef: MatDialogRef<OlvidadaDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.dialogMessage = data.message;
  }

  onCloseClicked(): void {
    this.dialogRef.close();
  }
}
