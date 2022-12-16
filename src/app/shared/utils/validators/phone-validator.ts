import { AbstractControl, ValidatorFn } from '@angular/forms';


export class CustomValidations {

  static phone(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: boolean } | null => {

      let value: string = control.value;
      if (value) {
        const phoneInit = value.slice(0, 2);
        const codeArea = value.slice(0, 4);
        if (phoneInit !== '09' && codeArea !== '+593') {
          return { phone: true };
        }

      }
      return null;
    };
  }

}
