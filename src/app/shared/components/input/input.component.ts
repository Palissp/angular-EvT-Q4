import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { SIZE } from './models/types/size.type';
import { STATE } from './models/types/state.type';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent implements OnInit {
  @Input() autocomplete: 'on' | 'off' = 'off';
  @Input() autofocus = false;
  @Input() currencyField = false;
  @Input() errorHelper = '';
  @Input() filterRegex: string;
  @Input() fullWidth = true;
  @Input() id = '';
  @Input() label = 'Label';
  @Input() maxLength: number;
  @Input() name = '';
  @Input() normalHelper = '';
  @Input() pattern = '';
  @Input() percentageField = false;
  @Input() placeholder = 'Escribe un texto';
  @Input() showMaxLength = false;
  @Input() showSearchButton = false;
  @Input() size: SIZE = 'medium';
  @Input() state: STATE = 'normal';
  @Input() styleClass = '';
  @Input() textUP = false;
  @Input() type = 'text';
  @Input() value: any;
  @Output() clickButton: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private control: NgControl) {}

  ngOnInit(): void {
  }

  handleEvent(event: any) {
    const regex = new RegExp(this.filterRegex);
    if (this.filterRegex && regex.test(String.fromCharCode(event.keyCode))) {
      event.preventDefault();
    }
  }

  get formControl() {
    return this.control.control as FormControl;
  }

  get hasErrors() {
    return this.formControl.touched && this.formControl.invalid;
  }

  get inputValue() {
    return this.formControl.value;
  }

  get maxValue(){
    return this.inputValue ? this.inputValue?.toString().length : 0 / this.maxLength;
  }

  handleClick() {
    this.clickButton.emit(true);
  }
}

