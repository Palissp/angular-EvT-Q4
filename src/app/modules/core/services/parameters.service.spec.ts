import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ParametersService } from './parameters.service';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { resultProvincesMock } from '../mocks/app.mock';

describe('ParametersService', () => {
  let service: HttpClient;
  let httpTestingController: HttpTestingController;
  let apiURL: string = environment.pathUrl;
  let pathParameters = 'estado/provincias';
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClient, ParametersService],
    });
    service = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('get Provinces List', () => {
    const resultMock = resultProvincesMock;
    const url = `${apiURL}/${pathParameters}`;

    service.get(url).subscribe((data) => {
      expect(data).toEqual(resultMock);
    });

    const req = httpTestingController.expectOne(url);

    expect(req.request.method).toEqual('GET');

    req.flush(resultMock);
  });
});
