import {TestBed} from '@angular/core/testing';

import {ProductService} from './product.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";
import {ProductModel} from "../../../models/product.model";
import {PRODUCTSMOCK} from "../../mocks/product.mock";

describe('ProductService', () => {
  let service: ProductService;
  const url = `${environment.api}/productos`;
  const mockProducts: Array<ProductModel> = PRODUCTSMOCK;

  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController)

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('get products', () => {
    service.getProducts().subscribe((products: ProductModel[]) => {
      expect(products).toEqual(mockProducts)
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(mockProducts);
  })
});
