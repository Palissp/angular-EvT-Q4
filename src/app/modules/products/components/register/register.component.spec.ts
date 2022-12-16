import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterComponent } from './register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [RegisterComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('validate form ', () => {
    component.getNameControl('fullname').setValue('firstName');
    component.getNameControl('lastname').setValue('lastName');
    component.getNameControl('email').setValue('prueba@gmail.com');
    component.getNameControl('phone').setValue('09356256985');
    component.getNameControl('province').setValue('Azuay');
    component.getNameControl('city').setValue('Cuenca');
    component.getNameControl('products').setValue(['TC', 'Credito']);
    component.getNameControl('terms').setValue(true);
    fixture.detectChanges();
    expect(component.productForm.valid).toBe(true);
  });
});
