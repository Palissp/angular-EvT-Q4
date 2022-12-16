import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormViewComponent } from './views/form-view/form-view.component';

const routes: Routes = [
  {
    path: '',
    component: FormViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
