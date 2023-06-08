import { Component,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

@Output() inputValue = new EventEmitter<string>();

  searchboxInput = new FormGroup({
    searchbox: new FormControl(''),
  })


  updateInputValue(value: any){
    console.log("its happening")
    this.inputValue.emit(value);
  }


}
