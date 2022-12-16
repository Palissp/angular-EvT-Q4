import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss']
})
export class TypographyComponent implements OnInit {
  @Input() type: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' = 'h1';
  @Input() text: string;
  @Input() align: 'center' | 'right' | 'left' = 'center';
  @Input() color: 'red' | 'green' | 'black' | 'grey' = 'black';
  constructor() { }

  ngOnInit(): void {
  }

}
