import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  templateUrl: './perfil-page.component.html',
  styleUrls: ['./perfil-page.component.css']
})
export class PerfilPageComponent {

  userName: string = "Paulius Mockevicius"
  userEmail: string = "paulius@rudo.es"

  

}
