import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() label = 'Label';
  @Input() type = 'text';
  @Input() placeholder = 'Escriba aquí...';
  @Input() errorHelper = '';
  @Input() normalHelper = '';

  constructor(private control: NgControl) {}

  ngOnInit(): void {}

  get formControl() {
    return this.control.control! as FormControl;
  }

  get hasErrors() {
    return this.formControl.touched && this.formControl.invalid;
  }

  get inputValue() {
    return this.formControl.value;
  }
}
