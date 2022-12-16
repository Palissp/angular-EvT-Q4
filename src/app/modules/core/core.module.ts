import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsService } from './services/products/products.service';
import { RegisterService } from './services/register/register.service';
import { StatesService } from './services/states/states.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ProductsService,
    RegisterService,
    StatesService,
  ]
})
export class CoreModule { }
