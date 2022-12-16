import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Option } from 'src/app/shared/interfaces/option.interface';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() id!: string;
  @Input() name!: string;
  @Input() label: string = '';
  @Input() placeholder: string = '';
  @Input() error!: string;
  @Input() value: string = '';
  @Input() disabled: boolean = false;
  @Input() readonly: boolean = false;
  @Input() maxLength!: number;
  @Input() infoIcon!: string;
  @Input() optionList: Option[] = [];
  @Output() byChange: EventEmitter<any> = new EventEmitter<any>();

  selected!: string;

  onChange(event: Event) {
    this.byChange.emit(this.selected);
  }
}
