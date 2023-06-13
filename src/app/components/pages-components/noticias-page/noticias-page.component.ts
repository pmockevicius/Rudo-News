import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import {Router} from '@angular/router';
import { NewsArticle, Noticia } from 'src/app/services/interface';

@Component({
  selector: 'app-noticias-page',
  templateUrl: './noticias-page.component.html',
  styleUrls: ['./noticias-page.component.css']
})
export class NoticiasPageComponent {

  constructor(public _dataSharingService: DataSharingService, private router: Router){}

  searchTerm: string | any
  noticias = this._dataSharingService.noticias

  filterTagsSelected: string = '';




  handleTagValues(tagsSelected: any){
// console.log("receiving tags selected in parent",tagsSelected)
this.filterTagsSelected = tagsSelected.join(',');

  }

handleInputValue(value: any) {
  // console.log("receiving search value in parent")
  this.searchTerm = value

}

// noticiaClicked(noticia: any){
//   this.router.navigate(['/noticia', noticia.id], {
//     state: { noticia: noticia }
//   })
// }

// changeFavStatus(noticia : NewsArticle){

// noticia.isFavorite = !noticia.isFavorite
// console.log("favorite pressed", noticia.isFavorite)
// }

}
