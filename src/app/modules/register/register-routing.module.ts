import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterViewComponent } from './pages/register-view/register-view.component';

const routes: Routes = [
  { 
    path: '',
    component: RegisterViewComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
