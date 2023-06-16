import { Component } from '@angular/core';

@Component({
  selector: 'app-escribe-comment-input',
  templateUrl: './escribe-comment-input.component.html',
  styleUrls: ['./escribe-comment-input.component.css']
})
export class EscribeCommentInputComponent {

  inputValue = '';
commentLength = this.inputValue.length
isInputFocused = false;


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


}
