import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { PersonInfoComponent } from "./components/molecules/person-info/person-info.component";
import { InputComponent } from './../shared/components/atoms/input/input.component';

@NgModule({
  declarations: [
    PersonInfoComponent,
    InputComponent,
  ],
  exports:[
    PersonInfoComponent,
    InputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }
