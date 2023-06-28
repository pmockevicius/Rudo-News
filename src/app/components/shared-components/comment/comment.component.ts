import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import constants from 'src/app/constants';
import { DepartamentosDialogComponent } from '../departamentos-dialog/departamentos-dialog.component';
import { EditCommentComponent } from '../../edit-comment/edit-comment.component';
import { DBCallsService } from 'src/app/services/db-calls.service';
import { OlvidadaDialogComponent } from '../message-dialog/olvidada-dialog.component';
import { ViewChild } from '@angular/core';




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
@Output() removeComment = new EventEmitter<string>();
@Output() updateComment = new EventEmitter<any>();


userImagePlaceholder: string = "./assets/images/user-photo.png"
succesfullyDeletedMessage: string = "tu comentario ha sido borrado exitosamente"
succesfullyUpdateddMessage: string = "tu comentario ha sido actualizado exitosamente"
updatedCommentEmptyMessage: string = "El nuevo comentario no puede estar vacío, inténtalo de nuevo."

isHovering: boolean = false;



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
        if(res){
        
          this.removeComment.emit(this.comment.id);
          // Call setTimeout to wait for the view to render fully
          setTimeout(() => {
            this.showConfirmationMessage(this.succesfullyDeletedMessage);
          },500)
         
        }
    
      })
    } else if (res){
      this._dbCallService.updateComment(this.comment.id, res).then(()=>{
        const data = {
          commentId: this.comment.id,
          updatedText: res
        }
        // this.showConfirmationMessage(this.succesfullyUpdateddMessage)
        this.updateComment.emit(data);

        setTimeout(() => {
          this.showConfirmationMessage(this.succesfullyUpdateddMessage);
        },500)
      })
    } else{
      this.showConfirmationMessage(this.updatedCommentEmptyMessage)
    }
  })
}


async showConfirmationMessage(message: string) {
  const dialogRef = await this.dialog.open(OlvidadaDialogComponent, {
    data: { message, needCancelarButton: false, messageTitle: "", buttonText: "OK" }
  })
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
