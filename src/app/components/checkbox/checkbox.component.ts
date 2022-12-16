import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'evt-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
})
export class CheckboxComponent implements OnInit {
  @Input() idElement: string = '';
  @Input() label: string = '';
  @Input() disabled: boolean = false;

  constructor(private readonly _control: NgControl) {}

  ngOnInit(): void {}

  get formControl(): FormControl {
    return this._control.control as FormControl;
  }
}
