import { Component, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  @Input() id!: string;
  @Input() name!: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() error!: boolean;
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxLength!: number;
  @Input() minLength!: number;
  @Input() infoIcon!: string;

  onChange: any = () => {};
  onTouch: any = () => {};

  // sets the value used by the ngModel of the element
  set value(val: string) {
    this.onChange(val);
    this.onTouch(val);
  }

  // This will will write the value to the view if the the value changes occur on the model programmatically
  writeValue(value: any) {
    this.value = value;
  }

  /* When the value in the UI is changed, this method will invoke a callback function */
  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  // When the element is touched, this method will get called
  registerOnTouched(onTouched: Function) {
    this.onTouch = onTouched;
  }
}
