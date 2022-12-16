import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Province } from '../../../models/province.model';

@Component({
  selector: 'app-select-province',
  templateUrl: './select-province.component.html',
  styleUrls: ['./select-province.component.scss'],
})
export class SelectProvinceComponent implements OnInit {
  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';
  @Input() list: Province[] = [];
  @Output() provinceSelected: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null));
    }
  }

  onChangeProvince(event: any) {
    this.provinceSelected.emit(event.target.value);
  }
}
