import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterFormComponent} from "./register-form/register-form.component";
import {RegisterRoutingModule} from "./register-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [RegisterFormComponent],
  exports: [
    RegisterFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class RegisterModule { }
