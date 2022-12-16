import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { PRODUCTSMOCK } from '@core/mocks/product.mock';
import { environment } from 'src/environments/environment';

import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let httpTestingController: HttpTestingController;
  let url = `${environment.api}/productos`;

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

  it('search products', () => {
    service.getProducts().subscribe((products) => {
      expect(products).toEqual(PRODUCTSMOCK)
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(PRODUCTSMOCK);


  })

  it('get select by products', () => {
    let returned = service.getSelectByProducts(PRODUCTSMOCK);
    expect(returned[0].label).toEqual(PRODUCTSMOCK[0].name);
    expect(returned[0].value).toEqual(PRODUCTSMOCK[0].id);
  })

});
