import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DBCallsService } from 'src/app/services/db-calls.service';

@Component({
  selector: 'app-escribe-comment-input',
  templateUrl: './escribe-comment-input.component.html',
  styleUrls: ['./escribe-comment-input.component.css']
})
export class EscribeCommentInputComponent {

  constructor(public _dbCallService: DBCallsService,){}

@Input() noticiaId: string = ""
@Output() addComment = new EventEmitter<any>();

  inputValue = '';
commentLength = this.inputValue.length
isInputFocused = false;


submitComment(){
this._dbCallService.postNewComment(this.noticiaId, this.inputValue).then((res)=>{
  const data = {
    commentId: res.id,
    commentText: res.text
  }

  this.addComment.emit(data);
})
  this.inputValue = ""


}

calculateCommentLength(){
  if(this.inputValue.length < 10){
    return "0"+this.inputValue.length
  }else{
    return this.inputValue.length
  }
}

}
