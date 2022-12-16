import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Select } from '@models/select.model';

@Component({
  selector: 'app-check-list',
  templateUrl: './check-list.component.html',
  styleUrls: ['./check-list.component.scss']
})
export class CheckListComponent implements OnInit {
  @Input() label: string = '';
  @Input() form: FormGroup = new FormGroup({});
  @Input() control: string = 'control';
  @Input() options: Select[] = [];

  selected: string[] = [];

  constructor() { }

  ngOnInit(): void {
    if (!this.form.contains(this.control)) {
      this.form.addControl(this.control, new FormControl(null, ));
    }
  }

  checkValue(option: Select){
    option.selected = !option.selected
    if (option.selected){
      this.selected.push(option.value)
    } else {
      const index = this.selected.indexOf(option.value, 0);
      if (index > -1) {
         this.selected.splice(index, 1);
      }
    }
    this.form.controls[this.control].setValue(this.selected);
  }

}


