import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistryFormComponent } from './pages/registry-form/registry-form.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistryComponent } from './pages/registry/registry.component';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistryFormComponent, RegistryComponent],
  exports: [RegistryFormComponent, RegistryComponent],
  imports: [
    CommonModule,
    SharedModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class RegistryModule {}
