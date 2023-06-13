import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { FAQ } from 'src/app/services/interface';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FAQComponent { 

  constructor(public _dataSharingService: DataSharingService){

  }

  FAQ: FAQ[] = this._dataSharingService.FAQ

}
