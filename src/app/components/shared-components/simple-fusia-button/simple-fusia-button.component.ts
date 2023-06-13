import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-simple-fusia-button',
  templateUrl: './simple-fusia-button.component.html',
  styleUrls: ['./simple-fusia-button.component.css']
})
export class SimpleFusiaButtonComponent {

  @Input() buttonText: string = ""

}
