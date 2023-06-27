import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DepartamentosDialogComponent } from '../../shared-components/departamentos-dialog/departamentos-dialog.component';
import {
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { ChangeDetectorRef } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css'],
})
export class EditarPerfilComponent implements OnInit{
  
  user: any;
  fullName: string = '';
  email: string = '';
  Alldepartments: any
  Userdepartments: any
  confirmationMessage: string = 'Los cambios se han guardado con éxito,';
selectedDepartments: any 
selectedDepartamentosIds: string[] = []


  constructor(
    public dialog: MatDialog,
    public _dataSharingService: DataSharingService,
    private router: Router,
    public _dbCallService: DBCallsService,
    public _authService: AuthService,
  ) {}

  ngOnInit(): void {

  this.getDepartments()
  this.getLoggedInUserInfo()
  }

  editPerfilForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
    nombre: new FormControl(this.fullName, [Validators.required]),
    mail: new FormControl(this.email, [Validators.required]),
    cambiar: new FormControl('Cambiar contraseña', [Validators.required]),
  });

getLoggedInUserInfo(){
  this._authService.retrieveLoggedInUserInfo().then((res) => {
    this.user = res;

    this.fullName = this.user.fullName;
    this.email = this.user.mail;
    this.Userdepartments = this.user.departments;

    this.editPerfilForm.patchValue({
      nombre: this.user.fullname,
      mail: this.user.email,
      departamentos: this.Userdepartments.map((department : any) => department.name).join(', ')
    });

  });
  
}


 getDepartments(){
  this._dbCallService.getAllDepartments().then((res)=>{
    this.Alldepartments = res
  })

 }

  openDialog() {
    const dialogRef = this.dialog
      .open(DepartamentosDialogComponent)
      .afterClosed()
      .subscribe((value) => {
        this.selectedDepartments = value.data
        this.updateDepartamentosInputValue(value.data);
        this.selectedDepartamentosIds = this.generateSelectedDepId()
      });
  }
  

generateSelectedDepId(){
const selectedDepartmentIds = this.Alldepartments
  .filter((department: { id: number, name: string }) => this.selectedDepartments.includes(department.name))
  .map((department: { id: number, name: string }) => department.id);
return selectedDepartmentIds
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
const fullname = this.editPerfilForm.controls.nombre.value
const email = this.editPerfilForm.controls.mail.value
const departments = this.selectedDepartamentosIds

this._authService.updateProfileInfo(fullname, email, departments).then((res)=>{
  this.router.navigate(['/perfil'])
})
  
    this.showConfirmationMessage();
  }

  showConfirmationMessage() {
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: {
        message: this.confirmationMessage,
        needCancelarButton: false,
        messageTitle: '',
        buttonText: 'Aceptar',
      },
    });
  }
}
