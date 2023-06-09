import { Component} from '@angular/core';
import { MatDialog,} from '@angular/material/dialog';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-olvidado-page',
  templateUrl: './olvidado-page.component.html',
  styleUrls: ['./olvidado-page.component.css']
})
export class OlvidadoPageComponent {
  testEmails: string[] = ['labas@labas.es', 'laba@labas.es', 'lab@labas.es' ];
  dialogMessage: string = 'hello';
  inputedEmail: any = ""

  constructor(public dialog: MatDialog) {}

  olvidadForm = new FormGroup({
    olvidEmail: new FormControl('',[Validators.email, Validators.required])
  })

  get olvidEmail(){
    return this.olvidadForm.get('olvidEmail')
  }


  openDialog() {
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: { message: this.dialogMessage }
    });
  }

  checkIfEmailValid(){
    if (this.testEmails.includes(this.inputedEmail) ){
      this.dialogMessage = "correct email"
    } else {
      this.dialogMessage = " try again wrong email"
    }
  }

  onContinuarOlvidadClicked(){
    this.inputedEmail =  this.olvidadForm.controls.olvidEmail.value
    this.checkIfEmailValid()
    this.openDialog()
  }

}
