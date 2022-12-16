import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RegisterFormComponent } from './register/register-form/register-form.component';
import { RegisterViewComponent } from './register/register-view/register-view.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    RegisterViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
