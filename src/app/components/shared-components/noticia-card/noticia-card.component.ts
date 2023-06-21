import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DBCallsService } from 'src/app/services/db-calls.service';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent {

  constructor( private router: Router,){}

  searchTerm: string | any

  filterTagsSelected: string = '';

  @Input() oneNoticia: any;

  noticiaClicked(noticia: any){
    this.router.navigate(['/noticia', noticia.id], {
      state: { noticia: noticia, noticiaId: noticia.id }
    })
  }
  
  changeFavStatus(noticia : any){
  
  noticia.is_Favorite = !noticia.is_Favorite
  console.log("favorite pressed", noticia.is_Favorite)
  }

}
