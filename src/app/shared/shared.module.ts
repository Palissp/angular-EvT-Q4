import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterFormComponent } from './components/organisms/register-form/register-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './components/molecules/nav-bar/nav-bar.component';

@NgModule({
  declarations: [RegisterFormComponent, NavBarComponent],
  exports: [RegisterFormComponent, NavBarComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
})
export class SharedModule {}
