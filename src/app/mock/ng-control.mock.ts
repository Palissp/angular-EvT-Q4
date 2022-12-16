import {
  AbstractControl,
  FormControl,
  NgControl,
  Validators,
} from '@angular/forms';

export class MockedNgControl extends NgControl {
  viewToModelUpdate(newValue: any): void {
    throw new Error('Method not implemented.');
  }

  get control(): AbstractControl | null {
    const control = new FormControl();
    control!.setValidators([Validators.required]);
    control!.setErrors({ invalid: true });
    control!.markAsTouched();
    control!.markAsDirty();
    return control;
  }
}
