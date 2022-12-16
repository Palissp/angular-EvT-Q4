import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { DropdownComponent } from './components/atoms/dropdown/dropdown.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';
import { RadioButtonComponent } from './components/atoms/radio-button/radio-button.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { FinishFormComponent } from './components/molecules/finish-form/finish-form.component';
import { LogoComponent } from './components/atoms/logo/logo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  InputComponent,
  DropdownComponent,
  CheckboxComponent,
  RadioButtonComponent,
  ButtonComponent,
  FinishFormComponent,
  LogoComponent,
];

@NgModule({
  declarations: [...components],
  exports: components,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SharedModule {}
