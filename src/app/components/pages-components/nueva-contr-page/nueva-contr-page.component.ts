import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';

@Component({
  selector: 'app-nueva-contr-page',
  templateUrl: './nueva-contr-page.component.html',
  styleUrls: ['./nueva-contr-page.component.css'],
})
export class NuevaContrPageComponent {
  constructor(public dialog: MatDialog) {}

  hidePasswordActual: boolean = true;
  hidePasswordNueva: boolean = true;
  hidePasswordRepetir: boolean = true;

  dialogMessage: string = 'boo';
  actualPassword: string = 'hello123';

  contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  nuevaContracenaForm = new FormGroup({
    contracenaActual: new FormControl('', [Validators.required]),
    contracenaNueva: new FormControl('', [Validators.required, Validators.pattern(this.contrasenaRegex)]),
    contracenaRepetir: new FormControl('', [Validators.required, Validators.pattern(this.contrasenaRegex)]),
  });

  get contracenaActual() {
    return this.nuevaContracenaForm.get('contracenaActual');
  }
  get contracenaNueva() {
    return this.nuevaContracenaForm.get('contracenaNueva');
  }
  get contracenaRepetir() {
    return this.nuevaContracenaForm.get('contracenaRepetir');
  }

  onGuardarClicked() {
    this.dialogMessage =  this.checkIfPasswordDataCorrect()
    this.openDialog()
  }

  openDialog() {
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: { message: this.dialogMessage },
    });
  }

  checkIfPasswordDataCorrect() {
if ( this.nuevaContracenaForm.controls.contracenaActual.value !== this.actualPassword){
  return "You have entered a wrong password, try again"
} else if (this.nuevaContracenaForm.controls.contracenaNueva.value === this.nuevaContracenaForm.controls.contracenaRepetir.value ){
  return "La contraseña se ha cambiado correctamente."
} else if (this.nuevaContracenaForm.controls.contracenaNueva.value !== this.nuevaContracenaForm.controls.contracenaRepetir.value) {
  return "Ha habido un error, revisa que ambas contraseñas coinciden."
} else { return ""}



console.log(this.nuevaContracenaForm.controls.contracenaActual.value)
  }
}
