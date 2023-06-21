import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DepartamentosDialogComponent } from '../registro-page/departamentos-dialog/departamentos-dialog.component';
import { FormControl, FormGroup, Validators, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputWFloatingLabelComponent } from '../../shared-components/input-w-floating-label/input-w-floating-label.component';
import { Router } from '@angular/router';
import { OlvidadaDialogComponent } from '../../shared-components/message-dialog/olvidada-dialog.component';


@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent {

  constructor(public dialog: MatDialog, public _dataSharingService: DataSharingService, private router: Router ) {

    // this.editPerfilForm.valueChanges.subscribe((value)=>{console.log(value)})
  }

  user:any = this._dataSharingService.perfils[0] 
  departamentos: any= this.user.departamentos
  nombre: string= this.user.nombre
  mail: string= this.user.mail

  dialogMessage: string = "Los cambios se han guardado con éxito,"

  editPerfilForm = new FormGroup({
    departamentos: new FormControl(this.departamentos, [Validators.required]),
    nombre: new FormControl(this.nombre, [Validators.required]),
    mail: new FormControl(this.mail, [Validators.required]),
    cambiar: new FormControl("Cambiar contraseña", [Validators.required]),
   
  })


  openDialog() {
    const dialogRef = this.dialog.open(DepartamentosDialogComponent).afterClosed().subscribe((value) => {
      console.log("value is ",value.data)
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

  navigateToNueva(){
    this.router.navigate(['/nueva'])
  }

  submitChanges(){
    console.log('changes....', this.editPerfilForm.value)
    this.showConfirmationMessage()
  }

  showConfirmationMessage(){
    const dialogRef = this.dialog.open(OlvidadaDialogComponent, {
      data: { message: this.dialogMessage, needCancelarButton: false, messageTitle: "", buttonText: "Aceptar" }
    });

  }
}
