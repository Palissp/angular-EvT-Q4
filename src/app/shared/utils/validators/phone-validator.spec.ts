import { FormControl, FormGroup } from '@angular/forms';

import { CustomValidations } from './phone-validator';


describe('phone number must init with 09 or +593', () => {

  let form: FormGroup;

  beforeEach(() => {
    form = new FormGroup({
      phone: new FormControl('', [CustomValidations.phone()]),
    }, );
  })

  it('form should VALID with 09', () => {
    form.setValue({
      phone: '0958778551',
    });

    expect(form.status).toEqual('VALID');
  });

  it('form should VALID with +593', () => {
    form.setValue({
      phone: '+593958778551',
    });

    expect(form.status).toEqual('VALID');
  });

  it('form should INVALID ', () => {
    form.setValue({
      phone: '087777777777',
    });

    expect(form.status).toEqual('INVALID');
  });

  it('form should valid not filled', () => {
    form.setValue({
      phone: '',
    });

    expect(form.status).toEqual('VALID');
  });

});
