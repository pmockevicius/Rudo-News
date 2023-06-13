import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { TermsYCondiciones } from 'src/app/services/interface';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css']
})
export class TerminosCondicionesComponent {

  constructor(public _dataSharingService: DataSharingService){
  }

  terminosYCondiciones: TermsYCondiciones[] = this._dataSharingService.TerminosYCondiciones

}
