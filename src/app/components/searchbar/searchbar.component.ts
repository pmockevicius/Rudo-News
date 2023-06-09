import { Component,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

@Output() inputValue = new EventEmitter<string>();
@Output() filtrarPorArrayEmiter =  new EventEmitter<string[]>();
@Output() filtrarPorArray: string[] = [];

isComidaClicked: boolean = false
isGamingClicked: boolean = false
isOcioClicked: boolean = false
isDeporteClicked: boolean = false



  searchboxInput = new FormGroup({
    searchbox: new FormControl(''),
  })





onTagClicked(tag:string){
switch(tag){
  case "Comida":
    this.isComidaClicked = !this.isComidaClicked
    if(this.isComidaClicked){
      this.filtrarPorArray.push(tag)
    } else{
      this.filtrarPorArray.splice(this.filtrarPorArray.indexOf(tag), 1);
    }
   
    break;

    case "Gaming":
      this.isGamingClicked = !this.isGamingClicked;
      if(this.isGamingClicked){
        this.filtrarPorArray.push(tag)
      } else{
        this.filtrarPorArray.splice(this.filtrarPorArray.indexOf(tag), 1);
      }
    break;

    case "Ocio":
      this.isOcioClicked = !this.isOcioClicked;
      if(this.isOcioClicked){
        this.filtrarPorArray.push(tag)
      } else{
        this.filtrarPorArray.splice(this.filtrarPorArray.indexOf(tag), 1);
      }
    break;

    case "Deporte":
      this.isDeporteClicked = !this.isDeporteClicked;
      if(this.isDeporteClicked){
        this.filtrarPorArray.push(tag)
      } else{
        this.filtrarPorArray.splice(this.filtrarPorArray.indexOf(tag), 1);
      }
    break;
}
this.updateSelectedTagsInParent(this.filtrarPorArray)
}

updateSelectedTagsInParent(array: string[]){
  this.filtrarPorArrayEmiter.emit(array)
}

  updateInputValueInParent(value: any){
    this.inputValue.emit(value);
  }


}
