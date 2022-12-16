import { Component, Input, OnInit } from '@angular/core';
import { ISelectItem } from 'src/app/modules/core/interfaces/select.interface';


@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() label: string = "";
  @Input() placeholder: string = "";
  @Input() required: boolean = false;
  @Input() data: ISelectItem[] = [];
  field: string | any = '';
  isDisabled: boolean = false;

  onChangeFn = (_?: any) => { };
  onTouchedFn = () => { };

  constructor() { }
  ngOnInit(): void { }

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
