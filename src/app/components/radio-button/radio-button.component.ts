import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';

@Component({
  selector: 'evt-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent implements OnInit {
  @Input() public idElement: string = '';
  @Input() public value: any = '';
  @Input() public name: string = '';
  @Input() public disabled: boolean = false;
  @Input() public label: string = '';

  constructor(private readonly _control: NgControl) {}

  ngOnInit(): void {}

  get inputValue() {
    return this._control.control!.value;
  }

  get checked() {
    return this.inputValue == this.value;
  }
}
