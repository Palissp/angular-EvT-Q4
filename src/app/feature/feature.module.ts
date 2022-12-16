import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { FeatureRoutingModule } from './feature-routing.module';
import { LoginComponent } from './login/login.component';
import { LoginCardComponent } from './login-card/login-card.component';

@NgModule({
  declarations: [LoginComponent, LoginCardComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule,FeatureRoutingModule],
})
export class FeatureModule {}
