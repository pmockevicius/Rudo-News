import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { NewsArticle } from 'src/app/services/interface';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent {

  constructor( private router: Router){}

  searchTerm: string | any

  filterTagsSelected: string = '';

  @Input() oneNoticia: any;

  noticiaClicked(noticia: any){
    this.router.navigate(['/noticia', noticia.id], {
      state: { noticia: noticia }
    })
  }
  
  changeFavStatus(noticia : any){
  
  noticia.isFavorite = !noticia.isFavorite
  console.log("favorite pressed", noticia.isFavorite)
  }

}
