import { Component } from '@angular/core';
import { DataSharingService } from 'src/app/services/data-sharing.service';
import {Router} from '@angular/router';
import { PostResponse,  } from 'src/app/services/interface';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { DatePipe } from '@angular/common';




@Component({
  selector: 'app-noticias-page',
  templateUrl: './noticias-page.component.html',
  styleUrls: ['./noticias-page.component.css']
})
export class NoticiasPageComponent {

  noticias: any = []

  constructor(
    public _dataSharingService: DataSharingService, 
    public _dbCallService: DBCallsService, 
    private router: Router, 
    ){
  }

  ngOnInit(): void {
    this._dbCallService.listPosts().subscribe(
      (result: PostResponse) => {
        this.noticias = result.results;
      },
      (error: any) => {
        console.error("Error getting posts from DB:", error);
      }
    );
  }

  searchTerm: string | any

  filterTagsSelected: string = '';




  handleTagValues(filteredByTagPosts: any){
this.noticias = filteredByTagPosts
  }

handleInputValue(value: any) {
  this.searchTerm = value

}


}
