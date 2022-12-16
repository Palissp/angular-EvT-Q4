//core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//compontentss
import { AppComponent } from './app.component';
import { CustomLabelComponent } from './components/atoms/custom-label/custom-label.component';
import { CheckBoxComponent } from './components/atoms/check-box/check-box.component';
import { ChecRadiusComponent } from './components/atoms/chec-radius/chec-radius.component';
import { FormComponent } from './components/organism/form/form.component';
import { CustomInputComponent } from './components/molecules/custom-input/custom-input.component';
import { CustomButtonComponent } from './components/molecules/custom-button/custom-button.component';
import { CustomErrorMessageComponent } from './components/atoms/custom-error-message/custom-error-message.component';
import { CustomSelectComponent } from './components/molecules/custom-select/custom-select.component';

@NgModule({
  declarations: [
    AppComponent,
    CheckBoxComponent,
    ChecRadiusComponent,
    FormComponent,
    CustomInputComponent,
    CustomLabelComponent,
    CustomButtonComponent,
    CustomErrorMessageComponent,
    CustomSelectComponent,
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
