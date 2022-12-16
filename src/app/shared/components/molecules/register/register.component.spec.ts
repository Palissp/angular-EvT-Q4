import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PRODUCTSMOCK } from '@core/mocks/product.mock';
import { PROVINCEMOCK } from '@core/mocks/province.mock';
import { ProductService } from '@core/services/product.service';
import { ProvinceService } from '@core/services/province.service';
import { RegisterService } from '@core/services/register.service';
import { InputComponent } from '@shared/components/atoms/input/input.component';
import { SelectComponent } from '@shared/components/atoms/select/select.component';
import { of } from 'rxjs';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;
  let productService: ProductService;
  let provinceService: ProvinceService;
  let registerService: RegisterService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        FormsModule,
        ReactiveFormsModule,
        HttpClientTestingModule,
      ],
      declarations: [ RegisterComponent, InputComponent, SelectComponent ],
      providers: [ProductService, ProvinceService, RegisterService]
    })
    .compileComponents();
  });


  beforeEach(() => {
    productService = TestBed.inject(ProductService);
    provinceService = TestBed.inject(ProvinceService);
    registerService = TestBed.inject(RegisterService);

    jest.spyOn(productService, 'getProducts').mockReturnValue(of(PRODUCTSMOCK));
    jest.spyOn(provinceService, 'getProvinces').mockReturnValue(of(PROVINCEMOCK));
    jest.spyOn(registerService, 'saveRegister').mockReturnValue(of({}));
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
