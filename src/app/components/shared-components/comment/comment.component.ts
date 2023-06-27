import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import constants from 'src/app/constants';
import { DepartamentosDialogComponent } from '../departamentos-dialog/departamentos-dialog.component';
import { EditCommentComponent } from '../../edit-comment/edit-comment.component';
import { DBCallsService } from 'src/app/services/db-calls.service';


@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {

  constructor(public dialog: MatDialog,
    public _dbCallService: DBCallsService,
    
    ){

  }

@Input() comment: any 
userImagePlaceholder: string = "./assets/images/user-photo.png"


getDepartmentNames(departments: any[]): string {
  return departments.map(department => department.name).join(', ');
}

getLoggedInUserId(){
  return localStorage.getItem(constants.LOGGED_IN_USER_ID_KEY)
}


editComment(){
  this.dialog.open(EditCommentComponent).afterClosed().subscribe((res)=>{
    if(res === "delete"){
      this._dbCallService.deleteComment(this.comment.id).then((res)=>{
        window.location.reload()
      })
    } else if (res){
      this._dbCallService.updateComment(this.comment.id, res).then((res)=>{
        console.log("update res", res)
        window.location.reload()
      })
    }
    
    
    
    
    
    console.log("res",res, "comentID",this.comment.id)})
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
