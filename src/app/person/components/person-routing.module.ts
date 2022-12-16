import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PersonRegisterComponent } from "../../person/components/person-register.component";

const routes: Routes = [
  {
    path: '',
    component: PersonRegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonRoutingModule { }
