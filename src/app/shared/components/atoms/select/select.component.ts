import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select } from '@models/select.model';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {

  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';
  @Input() options: Select[] = [];

  constructor() { }

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null, ));
    }
  }

}
