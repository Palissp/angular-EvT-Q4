import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {

  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';

  constructor() { }

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null,));
    }
  }

}
