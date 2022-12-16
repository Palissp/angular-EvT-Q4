import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { PRODUCTSMOCK } from '../../shared/mocks/products.mock';
import { environment } from '../../../environments/environment';

describe(' ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  let url = `${environment.apiPlayer}/productos`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
    });
    service = TestBed.inject(ProductService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search positions', () => {
    service.getProducts().subscribe((products) => {
      expect(products).toEqual(PRODUCTSMOCK);
    });

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(PRODUCTSMOCK);
  });
});
