import { Component, Inject, ViewEncapsulation } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';


@Component({
  selector: 'app-departamentos-dialog',
  templateUrl: './departamentos-dialog.component.html',
  styleUrls: ['./departamentos-dialog.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DepartamentosDialogComponent {
  constructor(
    public dialogRef: MatDialogRef<DepartamentosDialogComponent>, public _dataSharingService: DataSharingService, @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  checkedOptions: boolean[] = [];
    selectedDepartments : string = ''
    // departamentos: string[] = [
    //   "Back",
    //   "RRHH",
    //   "iOS",
    //   "Android",
    //   "Diseño",
    //   "Proyectos",
    //   "Ventas",
    //   "Academy",
    //   "Flutter",
    //   "Ionic",
    //   "JP",
    // ];


  departamentosDialog: any = new FormGroup({
    back: new FormControl(''),
    RRHH: new FormControl(''),
    iOS: new FormControl(''),
    Android: new FormControl(''),
    Diseño: new FormControl(''),
    Proyectos: new FormControl(''),
    Ventas: new FormControl(''),
    Academy: new FormControl(''),
    Flutter: new FormControl(''),
    Ionic: new FormControl(''),
    JP: new FormControl('')
  })



  
  onXClicked(): void {
    this.dialogRef.close();
  }

  onSubmit(){
    console.log(this.departamentosDialog.value)

    const selectedDepartments = Object.keys(this.departamentosDialog.value)
  .filter(key => this.departamentosDialog.value[key] === true);

  this.selectedDepartments = selectedDepartments.join(',')


  this.data



  this._dataSharingService.selectedDepartments = this.selectedDepartments


  console.log(this._dataSharingService.selectedDepartments)

  this.dialogRef.close();
   
  }
}
