import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'evt-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Input() disabled: boolean = false;
  @Output() onClick = new EventEmitter<void>();

  constructor() {}

  ngOnInit(): void {}

  onButtonClick() {
    this.onClick.emit();
  }
}
