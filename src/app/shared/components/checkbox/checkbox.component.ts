import { Component, Input } from '@angular/core';
import { NgControl, FormControl } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent {
  @Input() label = '';
  @Input() data: any;
  @Input() name = 'checkbox';

  onChangeFn = (_?: any) => {};
  onTouchedFn = () => {};

  constructor(private control: NgControl) {}

  get formControl() {
    return this.control.control! as FormControl;
  }

  get hasErrors() {
    return this.formControl.touched && this.formControl.invalid;
  }

  get inputValue() {
    return this.formControl.value;
  }

  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
}
