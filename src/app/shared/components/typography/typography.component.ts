import { Component, OnInit, Input } from '@angular/core';
import COLORS from '../../const/colors.const';

@Component({
  selector: 'app-typography',
  templateUrl: './typography.component.html',
  styleUrls: ['./typography.component.scss'],
})
export class TypographyComponent implements OnInit {
  @Input() variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'title'
    | 'subtitle'
    | 'bodyText'
    | 'smallText'
    | 'tinyText' = 'h1';
  @Input() color = 'blue';
  @Input() weight: 'normal' | 'bold' = 'normal';
  @Input() align: 'inherit' | 'left' | 'center' | 'right' | 'justify' =
    'inherit';

  constructor() {}

  ngOnInit(): void {}

  getColor(colorText: string) {
    switch (colorText) {
      case 'blue':
        return COLORS.blue500;
      case 'yellow':
        return COLORS.yellow500;
      case 'grey':
        return COLORS.darkGrey500;
      case 'white':
        return COLORS.white;
      case 'error':
        return COLORS.danger;
      default:
        return COLORS.black;
    }
  }
}
