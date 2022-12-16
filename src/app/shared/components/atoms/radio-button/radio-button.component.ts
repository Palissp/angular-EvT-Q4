import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-radio-button',
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss'],
})
export class RadioButtonComponent {
  @Input() id!: string;
  @Input() selected!: boolean;
  @Input() disabled?: boolean;
  @Input() label!: string;
  @Output() onClick: EventEmitter<string> = new EventEmitter<string>();

  onSelected(event: Event) {
    this.onClick.emit(this.id);
  }
}
