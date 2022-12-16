import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { RegisterViewComponent } from './register/register-view/register-view.component';
import {ReactiveFormsModule} from "@angular/forms";
import {ProductService} from "./core/services/product-service/product.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {LocationService} from "./core/services/product-service/location.service";

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    RegisterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    ProductService,
    HttpClient,
    LocationService
  ],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
