import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import { RegisterFormComponent } from './modules/core/components/register-form/register-form.component';
import { HeaderComponent } from './modules/core/components/header/header.component';
import { TypographyComponent } from './shared/components/typography/typography.component';
import { ButtonComponent } from './shared/components/button/button.component';
import { InputComponent } from './shared/components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SelectComponent } from './shared/components/select/select.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterFormComponent,
    HeaderComponent,
    InputComponent,
    ButtonComponent,
    TypographyComponent,
    SelectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [],
})
export class AppModule { }
