import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'white-button-w-arrow-forward',
  templateUrl: './white-button-w-arrow-forward.html',
  styleUrls: ['./white-button-w-arrow-forward.css']
})
export class DepartamentosDialogButtonComponent {

  constructor( public _dataSharingService: DataSharingService, ) {}

  departamentos: any = this._dataSharingService.perfils[0].departamentos


  @Input() control = new FormControl()
  @Input() inputId: any
  @Input() labelName: string = ""



  // openDialog() {
  //   const dialogRef = this.dialog.open(DepartamentosDialogComponent);

  //   dialogRef.afterClosed().subscribe(() => {
  //     this.updateDepartamentosInputValue(this.formName);
  //     // if(this.registerForm.controls.departamentos.valid){
  //     //   this.enableInputs()
  //     // }
  //   });
  // }

  // updateDepartamentosInputValue(formName: any) {
  //   if (formName) {
  //     formName.patchValue({
  //       departamentos: [this._dataSharingService.selectedDepartments],
  //     });
  //   }
  // }

}
