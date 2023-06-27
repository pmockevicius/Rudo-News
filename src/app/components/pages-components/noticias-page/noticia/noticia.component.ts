import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/services/interface';
import { DBCallsService } from 'src/app/services/db-calls.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {


 
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public _dbCallService: DBCallsService, ){
      this.loadNoticia()
  }

  noticia: any 
  noticiaId: any


  loadNoticia(){
    this.noticiaId = this.router.getCurrentNavigation()?.extras?.state?.['noticiaId'];
    this._dbCallService.retrievePost(this.noticiaId).subscribe(
      (result: Post) => {
        this.noticia = result;
      },
      (error: any) => {
        console.error("Error getting posts from DB:", error);
      }
    );

  }


  ngOnInit(){ 
    
  }
}
