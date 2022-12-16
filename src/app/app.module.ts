import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormViewComponent } from './views/form-view/form-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  InputComponent,
  SelectComponent,
  CheckboxComponent,
  RadioButtonComponent,
  ButtonComponent,
  FormFeebackComponent
} from './components';

@NgModule({
  declarations: [
    AppComponent,
    FormViewComponent,
    InputComponent,
    SelectComponent,
    CheckboxComponent,
    RadioButtonComponent,
    ButtonComponent,
    FormFeebackComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule {}
