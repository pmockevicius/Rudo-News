import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { DepartamentosDialogComponent } from '../../shared-components/departamentos-dialog/departamentos-dialog.component';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroPageComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    public _dataSharingService: DataSharingService,
    public _dbCallService: DBCallsService,
    public _authService: AuthService
  ) {}

  hidePassword: boolean = false;
  password: string = '';
  registerFormValue = {};
  departments: any;
  selectedDepartments: string[] = [];

  contrasenaRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  registerForm = new FormGroup({
    departamentos: new FormControl('Departamento/s', [Validators.required]),
    regNombre: new FormControl('', [Validators.required]),
    regEmail: new FormControl('', [Validators.email, Validators.required]),
    regContrasena: new FormControl('', [
      Validators.required,
      Validators.pattern(this.contrasenaRegex),
    ]),
    politicas: new FormControl('', [Validators.required]),
  });

  passwordValue: any = '';
  doesIncludeNumber: boolean = false;
  doesIncludeUpperCase: boolean = false;
  doesIncludeLowerCase: boolean = false;
  doesIncludeSpecialChar: boolean = false;
  isFormValid: boolean = false;

  hide = true;

  submitFormValue = () => {
    this.registerFormValue = this.registerForm.value;
    const fullname = this.registerForm.controls.regNombre.value;
    const email = this.registerForm.controls.regEmail.value;
    const password = this.registerForm.controls.regContrasena.value;
    const departamentos = this.generateSelectedDepId();

    this._dbCallService.retrieveLoggedInUserInfo();
    this._authService.registerNewUser(fullname, email, password, departamentos);
  };

  openDepartamentosDialog() {
    const dialogRef = this.dialog.open(DepartamentosDialogComponent);
    dialogRef.afterClosed().subscribe((res) => {
      this.selectedDepartments = res.data;
      this.updateDepartamentosInputValue(res.data);

      if (this.registerForm.controls.departamentos.valid) {
        this.enableInputs();
      }
    });
  }

  updateDepartamentosInputValue(selectedDep: string[]) {
    this.registerForm.patchValue({
      departamentos: selectedDep.join(','),
    });
  }

  passwordValueChanged() {
    this.passwordValue = this.registerForm.controls.regContrasena.value;
    this.doesIncludeNumber =
      this.passwordValue !== null && /\d/.test(this.passwordValue);
    this.doesIncludeUpperCase =
      this.passwordValue !== null && /[A-Z]/.test(this.passwordValue);
    this.doesIncludeLowerCase =
      this.passwordValue !== null && /[a-z]/.test(this.passwordValue);
    this.doesIncludeSpecialChar =
      this.passwordValue !== null &&
      /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.passwordValue);
  }

  getAllDepartments() {
    this._dbCallService.getAllDepartments().then((res) => {
      this.departments = res;
    });
  }

  generateSelectedDepId() {
    const selectedDepartmentIds = this.departments
      .filter((department: { id: number; name: string }) =>
        this.selectedDepartments.includes(department.name)
      )
      .map((department: { id: number; name: string }) => department.id);
    return selectedDepartmentIds.join(' ');
  }

  ngOnInit() {
    this.isFormValid = false;
    this.registerForm.controls.regNombre.disable();
    this.registerForm.controls.regEmail.disable();
    this.registerForm.controls.regContrasena.disable();
    this.registerForm.controls.politicas.disable();

    this.getAllDepartments();

    this.registerForm.valueChanges.subscribe((x) => {
      this.isFormValid = this.registerForm.valid;
    });
  }

  enableInputs() {
    this.registerForm.controls.regNombre.enable();
    this.registerForm.controls.regEmail.enable();
    this.registerForm.controls.regContrasena.enable();
    this.registerForm.controls.politicas.enable();
  }
}
