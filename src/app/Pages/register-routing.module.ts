import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RegisterFormComponent} from "./register-form/register-form.component";

const routes: Routes = [
  {
    path: '',
    children: [{
      path: 'registro',
      component: RegisterFormComponent
    },
      {
        path: '**',
        redirectTo: 'registro'
      }
    ]
  }]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule {
}
