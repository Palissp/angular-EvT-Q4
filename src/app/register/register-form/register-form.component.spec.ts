import {ComponentFixture, TestBed} from '@angular/core/testing';

import {RegisterFormComponent} from './register-form.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {ProductService} from "../../core/services/product-service/product.service";
import {PRODUCTSMOCK} from "../../core/mocks/product.mock";
import {of} from "rxjs";

describe('RegisterFormComponent', () => {
  let component: RegisterFormComponent;
  let fixture: ComponentFixture<RegisterFormComponent>;
  let productService: ProductService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RegisterFormComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ProductService
      ]
    })
      .compileComponents();
  });
  beforeEach(() => {
    productService = TestBed.inject(ProductService);
    jest.spyOn(productService, 'getProducts').mockReturnValue(of(PRODUCTSMOCK));
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('fill list of products', () => {
    component.ngOnInit()
    expect(productService.getProducts).toHaveBeenCalled();
    expect(component.products).toStrictEqual(PRODUCTSMOCK);
  });
});
