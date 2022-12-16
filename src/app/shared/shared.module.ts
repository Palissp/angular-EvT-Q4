import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/atoms/input/input.component';
import { HeaderComponent } from './components/molecules/header/header.component';
import { ButtonComponent } from './components/atoms/button/button.component';
import { SelectComponent } from './components/atoms/select/select.component';

@NgModule({
  declarations: [
    InputComponent,
    HeaderComponent,
    ButtonComponent,
    SelectComponent,
  ],
  exports: [InputComponent, HeaderComponent, ButtonComponent, SelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
