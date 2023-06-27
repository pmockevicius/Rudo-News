import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { AuthService } from 'src/app/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nueva-contr-page',
  templateUrl: './nueva-contr-page.component.html',
  styleUrls: ['./nueva-contr-page.component.css'],
})
export class NuevaContrPageComponent {
  constructor(public dialog: MatDialog,
             public _authService: AuthService,
             private router: Router) {}

  hidePasswordActual: boolean = true;
  hidePasswordNueva: boolean = true;
  hidePasswordRepetir: boolean = true;

  sucessMessage: string = 'La contraseña se ha cambiado correctamente.';
  errorMessage: string =
    'Ha habido un error, revisa que ambas contraseñas coinciden.';
  passwordsDoNotMatchMessage: string =
    'Sus nuevas contraseñas no coinciden. Inténtalo de nuevo';

  dialogMessage: string = 'boo';
  actualPassword: string = 'hello123';

  contrasenaRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  nuevaContracenaForm = new FormGroup({
    contracenaActual: new FormControl('', [Validators.required]),
    contracenaNueva: new FormControl('', [
      Validators.required,
      Validators.pattern(this.contrasenaRegex),
    ]),
    contracenaRepetir: new FormControl('', [
      Validators.required,
      Validators.pattern(this.contrasenaRegex),
    ]),
  });

  onGuardarClicked() {
    const actual: string | null =
      this.nuevaContracenaForm.controls.contracenaActual.value;
    const nueva: string | null =
      this.nuevaContracenaForm.controls.contracenaNueva.value;

    if (this.checkIfNewPasswordsMatch()) {
      this._authService.updateUserPassword(actual, nueva).then(
        (res) => {
          if (res) {
            this.showPopUpMessage(this.sucessMessage);
            this.redirectToPerfil()
          }
        },
        (error: any) => {
          this.showPopUpMessage(this.errorMessage);
        }
      );
    } else {
      this.showPopUpMessage(this.passwordsDoNotMatchMessage);
    }
  }

    redirectToPerfil() {
    this.router.navigate(['/perfil'])
  }

  showPopUpMessage(message: string) {
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: {
        message: message,
        needCancelarButton: false,
        messageTitle: '',
        buttonText: 'Aceptar',
      },
    });
  }

  checkIfNewPasswordsMatch() {
    if (
      this.nuevaContracenaForm.controls.contracenaNueva.value ===
      this.nuevaContracenaForm.controls.contracenaRepetir.value
    ) {
      return true;
    } else {
      return false;
    }
  }
}


// updateDepartamentosInputValue() {
//   this.registerForm.patchValue({
//     departamentos: this._dataSharingService.selectedDepartments,
//   });
// }