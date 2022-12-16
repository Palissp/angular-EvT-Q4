import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() color:
    | 'primary'
    | 'secondary'
    | 'complementary'
    | 'tertiary'
    | 'destructive' = 'primary';
  @Input() disabled: boolean = false;
  @Input() type: string = 'button';
  @Input() idElement = 'idButton';
  @Input() size: 'medium' | 'small' | 'large' | 'extra-large' = 'medium';
  @Input() fullWidth = false;
  @Output() public clickbutton: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.clickbutton.emit();
  }
}
