import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './services/product.service';
import { ProvinceService } from './services/province.service';
import { RegisterService } from './services/register.service';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
  ],
  providers: [
    ProductService,
    ProvinceService,
    RegisterService,
  ]
})
export class CoreModule { }
