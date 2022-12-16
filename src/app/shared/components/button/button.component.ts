import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() title: string = 'Continuar';
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
  @Input() disabled: boolean;
  @Output() handleClick: EventEmitter<boolean> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  actionClick() {
    this.handleClick.emit(true);
  }

}
