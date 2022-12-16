import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements OnInit {
  @Input() id = '';
  @Input() label = '';
  @Input() disabled?: boolean;
  @Input() isChecked?: boolean;
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickCheckbox() {
    this.isChecked = !this.isChecked;
    this.onClick.emit();
  }
}
