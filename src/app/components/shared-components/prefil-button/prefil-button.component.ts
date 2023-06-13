import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prefil-button',
  templateUrl: './prefil-button.component.html',
  styleUrls: ['./prefil-button.component.css']
})
export class PrefilButtonComponent {

  constructor( private router: Router){

  }

  @Input() buttonName: string = ""
  @Input() navigateTo: string = ""

  navigateToPage(){
    this.router.navigate([this.navigateTo])

  }

}
