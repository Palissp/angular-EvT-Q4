import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarFormComponent } from './components/navbar-form/navbar-form.component';

const customComponents = [
  InputComponent,
  SelectComponent,
  NavbarComponent,
  NavbarFormComponent,
];

@NgModule({
  declarations: [
    customComponents,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    customComponents
  ]
})
export class SharedModule { }
