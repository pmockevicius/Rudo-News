import { Component, Inject, OnInit, ViewEncapsulation } from '@angular/core';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { Department } from 'src/app/services/interface';

interface DepartamentosDialogForm {
  [key: string]: FormControl;
}


@Component({
  selector: 'app-departamentos-dialog',
  templateUrl: './departamentos-dialog.component.html',
  styleUrls: ['./departamentos-dialog.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class DepartamentosDialogComponent implements OnInit {


  
departments: any = null

departamentosDialog: FormGroup = new FormGroup({});

checkedOptions: boolean[] = [];
selectedDepartments : any 

  constructor(
    public dialogRef: MatDialogRef<DepartamentosDialogComponent>, 
    public _dataSharingService: DataSharingService,
     @Inject(MAT_DIALOG_DATA) public data: any,
     public _dbCallService: DBCallsService,

  ) {
    // this.departments = this._dbCallService.getAllDepartments();
  }

  ngOnInit(): void {
    this._dbCallService.getAllDepartments().then((departments: any) => {
      this.departments = departments;
      this.createFormControls();
    });
  }


  createFormControls() {
    this.departments.forEach((department: any) => {
      this.departamentosDialog.addControl(department.name, new FormControl(''));
    });
  }


  
  onXClicked(): void {
    this.dialogRef.close();
  }

  onSubmit(){

const selectedValues = this.checkedOptions.filter((value, index) => value);
    const selectedDepartments = Object.keys(this.departamentosDialog.value)
  .filter(key => this.departamentosDialog.value[key] === true);
  this.selectedDepartments = selectedDepartments

  this.dialogRef.close({data: this.selectedDepartments});
  }
}
