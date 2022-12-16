import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from './components/atoms/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SelectComponent } from './components/atoms/select/select.component';
import { RegisterComponent } from './components/molecules/register/register.component';
import { CheckListComponent } from './components/atoms/check-list/check-list.component';
import { RadioButtonComponent } from './components/atoms/radio-button/radio-button.component';
import { CheckboxComponent } from './components/atoms/checkbox/checkbox.component';


@NgModule({
  declarations: [
    InputComponent,
    SelectComponent,
    RegisterComponent,
    CheckListComponent,
    CheckListComponent,
    RadioButtonComponent,
    CheckboxComponent,
  ],
  exports:[
    InputComponent,
    SelectComponent,
    RegisterComponent,
    CheckListComponent,
    RadioButtonComponent,
    CheckboxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
