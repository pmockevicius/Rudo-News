import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { PoliticasDePrivacidad } from 'src/app/services/interface';

@Component({
  selector: 'app-politicas-privacidad',
  templateUrl: './politicas-privacidad.component.html',
  styleUrls: ['./politicas-privacidad.component.css']
})
export class PoliticasPrivacidadComponent { 

  constructor(public _dataSharingService: DataSharingService){

  }

 politicas: PoliticasDePrivacidad[] = this._dataSharingService.politicasDePrivacidad

}
