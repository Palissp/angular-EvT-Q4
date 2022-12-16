import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputComponent } from 'src/app/shared/components/input/input.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../core/services/product.service';
import { RegisterService } from '../core/services/register.service';
import { StateService } from '../core/services/state.service';
import { RouterModule } from '@angular/router';
import { RegisterFormComponent } from '../core/components/register-form/register-form.component';
import { HeaderComponent } from '../core/components/header/header.component';
import { ButtonComponent } from 'src/app/shared/components/button/button.component';
import { SelectComponent } from 'src/app/shared/components/select/select.component';

@NgModule({
  declarations: [
    InputComponent,
    RegisterFormComponent,
    HeaderComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers:[
    ProductService,
    RegisterService,
    StateService
  ]
})
export class RegisterModule { }
