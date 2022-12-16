import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-check-box',
  templateUrl: './check-box.component.html',
  styleUrls: ['./check-box.component.scss'],
})
export class CheckBoxComponent implements OnInit {
  @Input() value: string = '';
  @Input() codigo: any = '';
  check: boolean = false;

  @Input() label = 'este ess';
  @Output() option = new EventEmitter<{ value: string; check: boolean }>();

  constructor() {}

  ngOnInit(): void {}

  onPropagar() {
    this.check = !this.check;
    this.option.emit({ value: this.codigo, check: this.check });
  }
}
