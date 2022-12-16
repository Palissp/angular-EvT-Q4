import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsService } from '@core/services/products.service';

import { RegisterFormComponent } from './register-form.component';

describe('RegisterFormComponent', () => {
  let productsService: ProductsService;
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule],
      declarations: [RegisterFormComponent],
      providers: [ProductsService],
    }).compileComponents();

    productsService = TestBed.inject(ProductsService);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be email valid', () => {
    component.registerForm.setValue({
      name: '',
      lastname: '',
      email: 'test@gmail.com',
      phone: '',
      province: '',
      city: '',
    });

    expect(component.registerForm.get('email')?.errors?.['email']).toBeFalsy();
  });

  it('should be name required', () => {
    component.registerForm.setValue({
      name: 'Hanmiton Jhoel',
      lastname: '',
      email: '',
      phone: '',
      province: '',
      city: '',
    });

    expect(
      component.registerForm.get('name')?.errors?.['required']
    ).toBeFalsy();
  });

  it('should be name required', () => {
    component.registerForm.setValue({
      name: 'Hanmiton Jhoel',
      lastname: '',
      email: '',
      phone: '',
      province: '',
      city: '',
    });

    expect(
      component.registerForm.get('name')?.errors?.['required']
    ).toBeFalsy();
  });

  it('should be lastname required', () => {
    component.registerForm.setValue({
      name: '',
      lastname: 'Berrezueta Carmona',
      email: '',
      phone: '',
      province: '',
      city: '',
    });

    expect(
      component.registerForm.get('lastname')?.errors?.['required']
    ).toBeFalsy();
  });

  it('should be email required', () => {
    component.registerForm.setValue({
      name: '',
      lastname: '',
      email: 'test@gmail.com',
      phone: '',
      province: '',
      city: '',
    });

    expect(
      component.registerForm.get('email')?.errors?.['required']
    ).toBeFalsy();
  });

  it('should be phone required', () => {
    component.registerForm.setValue({
      name: '',
      lastname: '',
      email: '',
      phone: '0983814399',
      province: '',
      city: '',
    });

    expect(
      component.registerForm.get('phone')?.errors?.['required']
    ).toBeFalsy();
  });
});
