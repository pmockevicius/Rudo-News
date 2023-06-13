import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-back-title-for-perfil',
  templateUrl: './back-title-for-perfil.component.html',
  styleUrls: ['./back-title-for-perfil.component.css']
})
export class BackTitleForPerfilComponent {

  constructor( private router: Router){}

@Input() pageName: string = ""

  navigateBack(){
    this.router.navigate(['/perfil'])
  }

}
