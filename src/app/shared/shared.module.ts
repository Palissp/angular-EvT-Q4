import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/atoms/input/input.component';
import { SelectProvinceComponent } from './components/molecules/select-province/select-province.component';
import { SelectCityComponent } from './components/molecules/select-city/select-city.component';
import { HeaderComponent } from './components/molecules/header/header.component';

@NgModule({
  declarations: [InputComponent, SelectProvinceComponent,SelectCityComponent,HeaderComponent],
  exports: [InputComponent, SelectProvinceComponent,SelectCityComponent,HeaderComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
