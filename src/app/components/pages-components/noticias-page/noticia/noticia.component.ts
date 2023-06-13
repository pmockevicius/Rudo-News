import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Noticia } from 'src/app/services/interface';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent {

  noticia: Noticia 
 
currentDate = new Date();
milliseconds = this.currentDate.getTime();

inputValue = '';
commentLength = this.inputValue.length
isInputFocused = false;


  constructor(private route: ActivatedRoute, private router: Router){
    this.noticia = this.router.getCurrentNavigation()?.extras?.state?.['noticia'];
  }

  submitComment(){
    console.log("submiting comment",this.inputValue)
    this.inputValue = ""
  }

  calculateCommentLength(){
    if(this.inputValue.length < 10){
      return "0"+this.inputValue.length
    }else{
      return this.inputValue.length
    }
  }

  calculateTime(date: any){
// Assuming the commentDate is the date and time when the comment was posted
const commentDate = new Date (date)

// Get the current date and time
const currentDate = new Date();

// Calculate the time difference in milliseconds
const timeDiff = currentDate.getTime() - commentDate.getTime();

// Calculate the number of days and hours
const daysAgo = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));


if(daysAgo > 0 && daysAgo < 2){
  return "Hace " + daysAgo + " dia"
}
else if ( daysAgo > 1){
  return "Hace " + daysAgo + " dias"
}
else {
  if(hoursAgo > 1){
    return "Hace " + hoursAgo + " horas"
  } else {
    return "Hace " + hoursAgo + " hora"
  }
  
}

  }



}
