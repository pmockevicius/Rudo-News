import { Component, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-edit-comment',
  templateUrl: './edit-comment.component.html',
  styleUrls: ['./edit-comment.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class EditCommentComponent {
  constructor(public dialogRef: MatDialogRef<EditCommentComponent>) {}

  updateCommentForm = new FormGroup({
    editInputValue: new FormControl(''),
  });

  closeEditDialog(buttonPressed: string) {
    if (buttonPressed === 'delete') {
      this.dialogRef.close('delete');
    } else {
      const updatedComment =
        this.updateCommentForm.controls.editInputValue.value;
      this.dialogRef.close(updatedComment);
    }
  }
}
