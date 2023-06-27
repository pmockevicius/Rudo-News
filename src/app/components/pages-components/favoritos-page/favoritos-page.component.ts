import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DBCallsService } from 'src/app/services/db-calls.service';



@Component({
  selector: 'app-favoritos-page',
  templateUrl: './favoritos-page.component.html',
  styleUrls: ['./favoritos-page.component.css']
})
export class FavoritosPageComponent {

  constructor(public _dataSharingService: DataSharingService, 
    private router: Router,
    public _dbCallService: DBCallsService,
    public _authService: AuthService
    )
    { 
      this.loadFavoriteNoticias('1')
    }

  favoriteNoticias: any 

  noticiaClicked(noticia: any){
    this.router.navigate(['/noticia', noticia.id], {
      state: { noticia: noticia }
    })
  }
  
  changeFavStatus(noticia : any){
  
  noticia.isFavorite = !noticia.isFavorite

  }

loadFavoriteNoticias(pageNr:string){
    this._dbCallService.listFavoritePosts(pageNr).subscribe(
      (result: any) => {
        this.favoriteNoticias = result.results
      },
      (error: any) => {
        console.error("Error getting posts from DB:", error);
      }
    );


}

}
