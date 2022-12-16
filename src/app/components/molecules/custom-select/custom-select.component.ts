import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-custom-select',
  templateUrl: './custom-select.component.html',
  styleUrls: ['./custom-select.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CustomSelectComponent,
      multi: true,
    },
  ],
})
export class CustomSelectComponent implements OnInit, ControlValueAccessor {
  @Input() data: any[] | null = [];
  @Input() label: string = '';
  @Input() optionDefault = 'Seleccione';
  @Input() option: string = '';
  @Input() codigo: string = '';

  value: string = '';

  onChange!: Function;
  onTouch!: Function;

  constructor() {}
  writeValue(obj: string): void {
    if (obj) {
      this.value = obj;
    } else {
      this.value = '';
    }
  }
  registerOnChange(fn: Function): void {
    this.onChange = fn;
  }
  registerOnTouched(fn: Function): void {
    this.onTouch = fn;
  }

  ngOnInit(): void {}
}
