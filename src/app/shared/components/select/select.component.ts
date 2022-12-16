import { Component, Input } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { ISelect } from '../../interfaces/select.interface';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements ControlValueAccessor {
  @Input() label: string = '';
  @Input() placeholder: string = ''; // + required = true
  @Input() required: boolean = false;
  @Input() data: ISelect[] = [];
  field: string | any = '';
  isDisabled: boolean = false;

  onChangeFn = (_?: any) => {};
  onTouchedFn = () => {};

  constructor() {}
  ngOnInit(): void {}

  writeValue(value: any): void {
    this.field = value;
  }
  registerOnChange(fn: any): void {
    this.onChangeFn = fn;
  }
  registerOnTouched(fn: any): void {
    this.onTouchedFn = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    this.isDisabled = isDisabled;
  }
}
