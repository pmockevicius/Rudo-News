import { Component, Input } from '@angular/core';
import { Comment } from 'src/app/services/interface';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

@Input() comment: any 


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
