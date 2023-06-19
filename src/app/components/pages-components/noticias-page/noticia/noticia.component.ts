import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/services/interface';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {

  noticia: any 
 
  constructor(private route: ActivatedRoute, private router: Router){
    this.noticia = this.router.getCurrentNavigation()?.extras?.state?.['noticia'];
  }
}
