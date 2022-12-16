import { TestBed } from '@angular/core/testing';

import { CatalogsService } from './catalogs.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { City, Product, Province } from '../interfaces';

describe('CatalogsService', () => {
  let service: CatalogsService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CatalogsService],
    });
    service = TestBed.inject(CatalogsService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should getProvinces return list of provinces', () => {
    const response: Province[] = [
      {
        codigo: 'c',
        provincia: 'c',
      },
    ];

    service.getProvinces().subscribe((data) => {
      expect(data).toEqual(response);
    });
    const request = httpClient.expectOne(
      `${service.BASE_URL}/estado/provincias`
    );
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });

  it('should getProducts return list of products', () => {
    const response: Product[] = [
      {
        id: '1',
        name: 'name',
      },
    ];

    service.getProducts().subscribe((data) => {
      expect(data).toEqual(response);
    });
    const request = httpClient.expectOne(`${service.BASE_URL}/productos`);
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });

  it('should getCitiesByProvinceCode return list of cities by code', () => {
    const code = 'code';
    const response: City[] = [
      {
        canton: 'canton',
        id: 'id',
      },
    ];

    service.getCitiesByProvinceCode(code).subscribe((data) => {
      expect(data).toEqual(response);
    });
    const request = httpClient.expectOne(
      `${service.BASE_URL}/estado/provincias/${code}`
    );
    expect(request.request.method).toBe('GET');
    request.flush(response);
  });
});
