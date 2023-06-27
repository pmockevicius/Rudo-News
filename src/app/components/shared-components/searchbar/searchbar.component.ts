import { Component,EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { DBCallsService } from 'src/app/services/db-calls.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent {

  constructor(public _dbCallService: DBCallsService,){
    this.getAllCategories()
     
  }

@Output() inputValue = new EventEmitter<string>();
@Output() filtrarPorArrayEmiter =  new EventEmitter<string[]>();
@Output() filtrarPorArray: string[] = [];

filteredPosts: any

// isComidaClicked: boolean = false
// isGamingClicked: boolean = false
// isOcioClicked: boolean = false
// isDeporteClicked: boolean = false

categories: string[] = [] 



  searchboxInput = new FormGroup({
    searchbox: new FormControl(''),
  })


isTagClicked(category: string): boolean {
  return this.filtrarPorArray.includes(category);
}


 onTagClicked(category: string) {
  const index = this.filtrarPorArray.indexOf(category);
  if (index !== -1) {
    this.filtrarPorArray.splice(index, 1);
  } else {
    this.filtrarPorArray.push(category);
  }
  this.getFilteredPostsFromDb()

}


updateSelectedTagsInParent(array: string[]){
  this.filtrarPorArrayEmiter.emit(array)
}

  updateInputValueInParent(value: any){
    this.inputValue.emit(value);
  }


getAllCategories(){
  this._dbCallService.getAllCategories().then((res)=>{
 this.categories = res.results.map((result)=> result.name)
  })
}

getFilteredPostsFromDb(){
  this._dbCallService.filterByCategories(this.filtrarPorArray).then((res)=>{
    this.filteredPosts = res.results
   this.updateSelectedTagsInParent(this.filteredPosts)
  })

}


}
