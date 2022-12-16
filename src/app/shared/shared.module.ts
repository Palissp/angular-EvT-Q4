import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/select/select.component';
import { ButtonComponent } from './components/button/button.component';
import { TypographyComponent } from './components/typography/typography.component';
import { InputComponent } from './components/input/input.component';
import { BrandComponent } from './components/brand/brand.component';
import { CheckboxComponent } from './components/checkbox/checkbox.component';
import { RadioComponent } from './components/radio/radio.component';

const COMPONENTS = [
  SelectComponent,
  ButtonComponent,
  TypographyComponent,
  InputComponent,
  BrandComponent,
  CheckboxComponent,
  RadioComponent,
];

@NgModule({
  declarations: [COMPONENTS],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  exports: [COMPONENTS],
})
export class SharedModule {}
