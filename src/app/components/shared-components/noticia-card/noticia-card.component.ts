import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import { DBCallsService } from 'src/app/services/db-calls.service';

@Component({
  selector: 'app-noticia-card',
  templateUrl: './noticia-card.component.html',
  styleUrls: ['./noticia-card.component.css']
})
export class NoticiaCardComponent implements OnInit{

  constructor( 
    private router: Router,
    public _dbCallService: DBCallsService, ){
      

    }
    
    @Input() Noticia: any;

    isFavorite: boolean = false

    searchTerm: string | any

  filterTagsSelected: string = '';
  
  ngOnInit() {
    this.isFavorite = this.Noticia.is_favorite;
  }

  noticiaClicked(noticia: any){
    this.router.navigate(['/noticia', noticia.id], {
      state: { noticia: noticia, noticiaId: noticia.id }
    })
  }
  
  changeFavStatus(){
      this.isFavorite = !this.isFavorite
   
    }
   

  saveToFavoritePosts(postId: string){
    this._dbCallService.saveFavoritePost(postId)
  }

  deletePostFromFavorites(postId: string){
    this._dbCallService.deleteFavoritePost(postId).then((res)=>{console.log("result after deleting",res)})
  }

  handleAddFavoriteClick(noticiaId: any) {
    this.saveToFavoritePosts(noticiaId);
    this.changeFavStatus();
  }

  handleRemoveFavoriteClick(noticiaId: any) {
    this.deletePostFromFavorites(noticiaId);
    this.changeFavStatus();
  }

}
