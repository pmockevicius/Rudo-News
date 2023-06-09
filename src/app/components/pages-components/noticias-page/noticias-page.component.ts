import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';

@Component({
  selector: 'app-noticias-page',
  templateUrl: './noticias-page.component.html',
  styleUrls: ['./noticias-page.component.css']
})
export class NoticiasPageComponent {

  constructor(public _dataSharingService: DataSharingService,){}

  searchTerm: string | any
  // filterTagsSelected: string[] = []
  noticias = this._dataSharingService.noticias

  filterTagsSelected: string = '';



  handleTagValues(tagsSelected: any){
console.log("receiving tags selected in parent",tagsSelected)
this.filterTagsSelected = tagsSelected.join(',');

  }

handleInputValue(value: any) {
  console.log("receiving search value in parent")
  this.searchTerm = value

}

}
