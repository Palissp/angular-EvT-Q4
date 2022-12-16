import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ItemSelect } from '../../../models/item-select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
})
export class SelectComponent implements OnInit {
  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';
  @Input() items: ItemSelect[] = [];
  @Output() onChangeEvent = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null));
    }
  }

  onChange(event: any) {
    this.onChangeEvent.emit(event.value);
  }
}
