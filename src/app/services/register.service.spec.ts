import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import { environment } from '../../environments/environment';

const mock: ReadProductModel[] = [
  {
    name: 'Tarjeta de crédito',
    id: 'tarjeta-de-credito',
  },
  {
    name: 'Tarjeta de débito',
    id: 'tarjeta-de-debito',
  },
  {
    name: 'Cuenta corriente',
    id: 'cuenta-corriente',
  },
];

const mockProvinces: ReadProvinceModel[] = [
  {
    provincia: 'LOJA',
    codigo: 'LOJ',
  },
  {
    provincia: 'LOS RIOS',
    codigo: 'LRO',
  },
  {
    provincia: 'MANABI',
    codigo: 'MAN',
  },
];

const mockCities: ReadCityModel[] = [
  {
    id: 'BIN',
    canton: 'BIBLIÁN',
  },
  {
    id: 'CAR',
    canton: 'CAÑAR',
  },
  {
    id: 'LNL',
    canton: 'LA TRONCAL',
  },
];

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ReadProductModel } from '../models/read-product.model';
import { ReadProvinceModel } from '../models/read-province.model';
import { ReadCityModel } from '../models/read-city.model';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpTesting: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.inject(RegisterService);
    httpTesting = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should be getAll products', (done) => {
    const apiUrl = environment.url;
    service.getAllProducts().subscribe((data) => {
      expect(data).toEqual(mock);
      done();
    });
    const req = httpTesting.expectOne(`${apiUrl}/productos`);
    expect(req.request.method).toEqual('GET');
    req.flush(mock);

    httpTesting.verify();
  });

  it('should be getAll provinces', (done) => {
    const apiUrl = environment.url;
    service.getAllProvinces().subscribe((data) => {
      expect(data).toEqual(mockProvinces);
      done();
    });
    const req = httpTesting.expectOne(`${apiUrl}/estado/provincias`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProvinces);

    httpTesting.verify();
  });

  it('should be getAll cities', (done) => {
    const codigo = 'CAN';
    const apiUrl = environment.url;
    service.getAllCities(codigo).subscribe((data) => {
      expect(data).toEqual(mockCities);
      done();
    });
    const req = httpTesting.expectOne(`${apiUrl}/estado/provincias/${codigo}`);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCities);

    httpTesting.verify();
  });
});
