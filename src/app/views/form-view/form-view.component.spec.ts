import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { CatalogsService, RegisterService } from '../../services';

import { FormViewComponent } from './form-view.component';

describe('FormViewComponent', () => {
  let component: FormViewComponent;
  let fixture: ComponentFixture<FormViewComponent>;
  let catalogsService: CatalogsService;
  let registerService: RegisterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule, HttpClientTestingModule],
      declarations: [FormViewComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    catalogsService = TestBed.inject(CatalogsService);
    registerService = TestBed.inject(RegisterService);
  });

  beforeEach(() => {
    jest.spyOn(catalogsService, 'getProvinces').mockReturnValue(of([]));
    jest.spyOn(catalogsService, 'getProducts').mockReturnValue(of([]));
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should resetForm reset the form', () => {
    const spy = jest.spyOn(component.registerForm.get('name')!, 'reset');
    component.resetForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should getSingleProductControl return a product control', () => {
    const product = component.generateProductControl({
      id: '1',
      name: 'name',
      selected: false,
    });
    const result = component.getSingleProductControl(product, 'id');
    expect(result).not.toBeFalsy();
  });

  it('should isSubmitButtonDisabled return true when is loading', () => {
    jest.spyOn(component.registerForm, 'invalid', 'get').mockReturnValue(false);
    component.isLoading = true;
    const result = component.isSubmitButtonDisabled;
    expect(result).toBeTruthy();
  });

  it('should isSubmitButtonDisabled return true form status is not filling', () => {
    jest.spyOn(component.registerForm, 'invalid', 'get').mockReturnValue(false);
    component.isLoading = false;
    component.formStatus = 'error';
    const result = component.isSubmitButtonDisabled;
    expect(result).toBeTruthy();
  });

  it('should isSubmitButtonDisabled return true when terms are not accepted', () => {
    jest.spyOn(component.registerForm, 'invalid', 'get').mockReturnValue(false);
    component.isLoading = false;
    component.formStatus = 'filling';
    component.registerForm.get('terms')!.setValue(false);
    const result = component.isSubmitButtonDisabled;
    expect(result).toBeTruthy();
  });

  it('should getProducts fill product options array', () => {
    const spy = jest.spyOn(component.productsOptions, 'push');
    jest.spyOn(catalogsService, 'getProducts').mockReturnValue(
      of([
        {
          id: '1',
          name: '1',
        },
      ])
    );

    component.getProducts();
    expect(spy).toHaveBeenCalled();
  });

  it('should getCitiesByProvinceCode set cities options', () => {
    jest.spyOn(catalogsService, 'getCitiesByProvinceCode').mockReturnValue(
      of([
        {
          id: '1',
          canton: 'canton',
        },
      ])
    );

    component.getCitiesByProvinceCode('dummieCode');
    expect(component.citiesOptions.length).toBeGreaterThan(0);
  });

  it('should submitForm call service to post registration information', () => {
    const spy = jest.spyOn(registerService, 'submitRegistration');
    component.productsOptions.push(
      component.generateProductControl({
        id: '1',
        name: 'P',
      })
    );

    component.productsOptions.at(0).get('selected')!.setValue(true);

    component.submitForm();
    expect(spy).toHaveBeenCalled();
  });

  it('should areProductsValid return truen when there are between 2 and 4 products selected', () => {
    component.productsOptions.push(
      component.generateProductControl({
        id: '1',
        name: 'P',
      })
    );
    component.productsOptions.push(
      component.generateProductControl({
        id: '2',
        name: 'P',
      })
    );

    component.productsOptions.at(0).get('selected')!.setValue(true);
    component.productsOptions.at(1).get('selected')!.setValue(true);

    const result = component.areProductsValid;
    expect(result).toBeTruthy();
  });
});
