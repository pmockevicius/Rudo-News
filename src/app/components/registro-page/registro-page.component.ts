import {Component, Inject, ViewEncapsulation} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogModule} from '@angular/material/dialog';
import {NgIf} from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import { DepartamentosDialogComponent } from '../departamentos-dialog/departamentos-dialog.component';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';




@Component({
  selector: 'app-registro-page',
  templateUrl: './registro-page.component.html',
  styleUrls: ['./registro-page.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class RegistroPageComponent {
  constructor(public dialog: MatDialog, public _dataSharingService: DataSharingService, ) {}

  hidePassword: boolean = false

  password: string = ''
  registerFormValue = {}
  
  selectedDepartments = this._dataSharingService.selectedDepartments

  contrasenaRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;


  registerForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
    regNombre: new FormControl('',[Validators.required]),
    regEmail: new FormControl('', [Validators.email, Validators.required]),
    regContrasena: new FormControl('', [Validators.required, Validators.pattern(this.contrasenaRegex)]),
    politicas: new FormControl('', [Validators.required])
  })

  passwordValue: string = ''
  doesIncludeNumber: boolean = false
  doesIncludeUpperCase: boolean  = false
  doesIncludeLowerCase: boolean  = false
  doesIncludeSpecialChar: boolean  = false
  
  hide = true;

  submitFormValue = () =>{
    this.registerFormValue = this.registerForm.value
    // this.registerForm.controls.regNombre.disable()
    console.log("pressed",this.registerFormValue)
      }



      openDialog() {
        const dialogRef = this.dialog.open(DepartamentosDialogComponent);
    
        dialogRef.afterClosed().subscribe(() => {
          this.updateDepartamentosInputValue();
          if(this.registerForm.controls.departamentos.valid){
            this.enableInputs()
          }
        });
      }
    
      updateDepartamentosInputValue() {
        this.registerForm.patchValue({
          departamentos: this._dataSharingService.selectedDepartments,
        });
      }

  passwordValueChanged(value: string){
    this.passwordValue =value
    this.doesIncludeNumber = this.passwordValue !== null && /\d/.test(this.passwordValue);
    this.doesIncludeUpperCase = this.passwordValue !== null && /[A-Z]/.test(this.passwordValue);
    this.doesIncludeLowerCase = this.passwordValue !== null && /[a-z]/.test(this.passwordValue);
    this.doesIncludeSpecialChar = this.passwordValue !== null &&  /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(this.passwordValue);
    
  }

get regNombre(){
  return this.registerForm.get('regNombre')
}
get regEmail(){
  return this.registerForm.get('regEmail')
}
get regContrasena(){
  return this.registerForm.get('regContrasena')
}
get departamentos(){
  return this.registerForm.get('departamentos')
}
get politicas(){
  return this.registerForm.get('politicas')
}


ngOnInit() {
  this.registerForm.controls.regNombre.disable()
  this.registerForm.controls.regEmail.disable()
  this.registerForm.controls.regContrasena.disable()
}

enableInputs() {
console.log("enabling Inputs")
    this.registerForm.controls.regNombre.enable()
    this.registerForm.controls.regEmail.enable()
    this.registerForm.controls.regContrasena.enable()
  
}

doSomething(){
  console.log("ngIf")
}




}
