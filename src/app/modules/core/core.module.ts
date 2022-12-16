import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppInterceptor } from './interceptors/app.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ProductsService } from './services/products.service';
import { RegistryService } from './services/registry.service';
import { ParametersService } from './services/parameters.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    ParametersService,
    ProductsService,
    RegistryService,
    { provide: HTTP_INTERCEPTORS, useClass: AppInterceptor, multi: true },
  ],
})
export class CoreModule {}
