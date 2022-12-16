import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() label: string = '';
  @Input() typeCss: string = '';
  @Output() onClickButton = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickEvent() {
    this.onClickButton.emit(this.label);
  }
}
