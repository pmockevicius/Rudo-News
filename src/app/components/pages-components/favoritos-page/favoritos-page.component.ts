import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { NewsArticle } from 'src/app/services/interface';

@Component({
  selector: 'app-favoritos-page',
  templateUrl: './favoritos-page.component.html',
  styleUrls: ['./favoritos-page.component.css']
})
export class FavoritosPageComponent {

  constructor(public _dataSharingService: DataSharingService, private router: Router){}

  noticias = this._dataSharingService.noticias

  noticiaClicked(noticia: any){
    this.router.navigate(['/noticia', noticia.id], {
      state: { noticia: noticia }
    })
  }
  
  changeFavStatus(noticia : NewsArticle){
  
  noticia.isFavorite = !noticia.isFavorite
  console.log("favorite pressed", noticia.isFavorite)
  }

}
