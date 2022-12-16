import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'evt-form-feeback',
  templateUrl: './form-feeback.component.html',
  styleUrls: ['./form-feeback.component.scss'],
})
export class FormFeebackComponent implements OnInit {
  @Input() type: string = '';

  constructor() {}

  ngOnInit(): void {}
}
