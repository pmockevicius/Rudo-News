import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Post } from 'src/app/services/interface';
import { DBCallsService } from 'src/app/services/db-calls.service';


@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit, AfterViewInit {


 
  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    public _dbCallService: DBCallsService, ){
      this.loadNoticia()
  }

  noticia: any 
  noticiaId: any

  imageSource: string = ""
  imageLoaded: boolean = false;

  ngOnInit() {
    this.imageSource = './assets/images/thumbnail-360x240.png';
  }

  onImageLoad() {
    this.imageLoaded = true;
    this.imageSource = this.noticia.image
  }

  onImageError() {
    this.imageSource = './assets/images/thumbnail-360x240.png';
    this.imageLoaded = true;
  }


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

 

  ngAfterViewInit(): void {
    
  }
}
