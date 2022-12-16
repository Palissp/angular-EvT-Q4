import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { City } from '../../../models/city.model';

@Component({
  selector: 'app-select-city',
  templateUrl: './select-city.component.html',
  styleUrls: ['./select-city.component.scss'],
})
export class SelectCityComponent implements OnInit {
  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';
  @Input() list: City[] = [];

  constructor() {}

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null));
    }
  }
}
