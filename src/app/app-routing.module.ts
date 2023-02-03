import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainFormComponent} from "./modules/main-form/main-form.component";
import {SuccessAdviceComponent} from "./modules/success-advice/success-advice.component";
import {ErrorAdviceComponent} from "./modules/error-advice/error-advice.component";
import {LayoutComponent} from "./shared/components/layout/layout.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        component: MainFormComponent,
      },
      {
        path: 'success',
        component: SuccessAdviceComponent,
      },
      {
        path: 'error',
        component: ErrorAdviceComponent,
      },
      {path: 'home', redirectTo: '/'},
      {path: '**', redirectTo: '/error'},
    ]

  }



];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
