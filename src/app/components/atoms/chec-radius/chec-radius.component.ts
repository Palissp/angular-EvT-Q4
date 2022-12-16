import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-chec-radius',
  templateUrl: './chec-radius.component.html',
  styleUrls: ['./chec-radius.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: ChecRadiusComponent,
      multi: true,
    },
  ],
})
export class ChecRadiusComponent implements OnInit, ControlValueAccessor {
  value: any = '';

  @Input() label = 'hgolas';

  onChange!: Function;
  onTouch!: Function;

  constructor() {}

  ngOnInit(): void {}

  writeValue(obj: any): void {
    this.value = obj;
  }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }
}
