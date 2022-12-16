import { Component, Input, OnInit } from '@angular/core';
import { FormControl, NgControl } from '@angular/forms';
import { SelectOption } from '../../interfaces';

@Component({
  selector: 'evt-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() idElement: string = '';
  @Input() label: string = '';
  @Input() options: SelectOption[] = [];
  @Input() disabled: boolean = false;

  constructor(private readonly _control: NgControl) {}

  get formControl(): FormControl {
    return this._control.control as FormControl;
  }

  ngOnInit(): void {}
}
