import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "src/app/shared/shared.module";
import { PersonRegisterComponent } from "../../person/components/person-register.component";
import { PersonRoutingModule } from '../../person/components/person-routing.module';
@NgModule({
  declarations: [
    PersonRegisterComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PersonRoutingModule,
    SharedModule
  ]
})
export class PersonModule { }
