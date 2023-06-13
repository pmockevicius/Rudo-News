import { Component, Input } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent {

  constructor(public _dataSharingService: DataSharingService){

  }


  editarForm = new FormGroup({
    departamentos: new FormControl('', [Validators.required]),
  })

  user = this._dataSharingService.perfils[0]

  userName: string = "Paulius Mockevicius"
  userEmail: string = "paulius@rudo.es"

  

}
