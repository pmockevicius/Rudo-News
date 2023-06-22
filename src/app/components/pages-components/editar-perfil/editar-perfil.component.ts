import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DepartamentosDialogComponent } from '../registro-page/departamentos-dialog/departamentos-dialog.component';
import {
  FormControl,
  FormGroup,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputWFloatingLabelComponent } from '../../shared-components/input-w-floating-label/input-w-floating-label.component';
import { Router } from '@angular/router';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit{
  
  user: any;
  fullName: string = '';
  email: string = '';
  departments: any
  dialogMessage: string = 'Los cambios se han guardado con éxito,';

  constructor(
    public dialog: MatDialog,
    public _dataSharingService: DataSharingService,
    private router: Router,
    public _dbCallService: DBCallsService,
    private changeDetectorRef: ChangeDetectorRef
  ) {

  }


  ngOnInit(): void {
    this._dbCallService.retrieveLoggedInUserInfo().then((res) => {
      this.user = res;
      console.log('rrrr', this.user);

      this.fullName = this.user.fullName;
      this.email = this.user.mail;
      this.departments = this.user.departments;

      this.editPerfilForm.patchValue({
        nombre: this.user.fullname,
        mail: this.user.email,
        departamentos: this.departments.map((department : any) => department.name).join(', ')
      });

    });
  }

  editPerfilForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
    nombre: new FormControl(this.fullName, [Validators.required]),
    mail: new FormControl(this.email, [Validators.required]),
    cambiar: new FormControl('Cambiar contraseña', [Validators.required]),
  });

 

  openDialog() {
    const dialogRef = this.dialog
      .open(DepartamentosDialogComponent)
      .afterClosed()
      .subscribe((value) => {
        console.log('value is ', value.data);
        this.updateDepartamentosInputValue(value.data);
        // if(this.registerForm.controls.departamentos.valid){
        //   this.enableInputs()
        // }
      });
  }

  updateDepartamentosInputValue(value: any) {
    this.editPerfilForm.patchValue({
      departamentos: value,
    });
  }

  navigateToNueva() {
    this.router.navigate(['/nueva']);
  }

  submitChanges() {
    console.log('changes....', this.editPerfilForm.value);
    this.showConfirmationMessage();
  }

  showConfirmationMessage() {
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: {
        message: this.dialogMessage,
        needCancelarButton: false,
        messageTitle: '',
        buttonText: 'Aceptar',
      },
    });
  }
}
