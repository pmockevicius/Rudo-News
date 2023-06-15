import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contrasena-input-w-eye',
  templateUrl: './contrasena-input-w-eye.component.html',
  styleUrls: ['./contrasena-input-w-eye.component.css']
})
export class ContrasenaInputWEyeComponent {
  @Input() label: string = ''
  @Input() inputId: string = ''
  @Input() placeholder: string = ''
  @Input() control = new FormControl()

  isInvalid = false;
  hidePassword = true;

  passwordValueChanged(value: string): void {
    // Implement your validation logic here
    // Set isInvalid to true if the password is invalid, based on your validation rules
  }

  togglePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }



}
