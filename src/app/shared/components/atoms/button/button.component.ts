import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text = '';
  @Input() disabled?: boolean;
  @Input() typeButton: string = 'primary' || 'secundary';
  @Output() onClick = new EventEmitter<any>();

  constructor() {}

  ngOnInit(): void {}

  onClickButton() {
    this.onClick.emit();
  }
}
