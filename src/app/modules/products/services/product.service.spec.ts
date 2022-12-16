import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ProductService } from './product.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { IProvince } from '../interfaces/province.interface';
import { environment } from 'src/environments/environment';

const provincies: IProvince[] = [
  {
    provincia: 'AZUAY',
    codigo: 'AZ',
  },
  {
    provincia: 'BOLIVAR',
    codigo: 'BOL',
  },
  {
    provincia: 'CAÑAR',
    codigo: 'CAN',
  },
];

const cities = [
  {
    id: 'CNA',
    canton: 'CUENCA',
  },
  {
    id: 'GÓN',
    canton: 'GIRÓN',
  },
  {
    id: 'GAO',
    canton: 'GUALACEO',
  },
];

const products = [
  {
    name: 'Tarjeta de crédito',
    id: 'tarjeta-de-credito',
  },
  {
    name: 'Tarjeta de débito',
    id: 'tarjeta-de-debito',
  },
];

describe('ProductService', () => {
  let service: ProductService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductService],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });
  beforeEach(() => {
    service = TestBed.inject(ProductService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getProvinces', () => {
    service.getProvinces().subscribe((res: IProvince[]) => {
      expect(res).toEqual(provincies);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/estado/provincias`);
    expect(req.request.method).toBe('GET');
    req.flush(provincies);
  });

  it('getCities', () => {
    const id = 'AZ';
    service.getProvinces().subscribe((res: IProvince[]) => {
      expect(res).toEqual(cities);
    });

    const req = httpMock.expectOne(
      `${environment.apiUrl}/estado/provincias/${id}`
    );
    expect(req.request.method).toBe('GET');
    req.flush(cities);
  });

  it('getProducts', () => {
    service.getProvinces().subscribe((res: IProvince[]) => {
      expect(res).toEqual(products);
    });

    const req = httpMock.expectOne(`${environment.apiUrl}/productos/`);
    expect(req.request.method).toBe('GET');
    req.flush(products);
  });
});
