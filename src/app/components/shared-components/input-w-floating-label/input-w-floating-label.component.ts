import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-w-floating-label',
  templateUrl: './input-w-floating-label.component.html',
  styleUrls: ['./input-w-floating-label.component.css'],
  
})
export class InputWFloatingLabelComponent {

  @Input() labelName: string = ""
  @Input() initialValue: any = ""
  @Input() formControlName: string = ""
  @Input() formGroupName: any = ""
  @Input() control = new FormControl()

}
