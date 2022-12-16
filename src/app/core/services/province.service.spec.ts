import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { environment } from '../../../environments/environment';
import { ProvinceService } from './province.service';
import { PROVINCESMOCK } from '../../shared/mocks/province.mock';

describe(' ProvinceService', () => {
  let service: ProvinceService;
  let httpTestingController: HttpTestingController;
  let url = `${environment.apiPlayer}/estado/provincias`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProvinceService],
    });
    service = TestBed.inject(ProvinceService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search positions', () => {
    service.getProvinces().subscribe((provinces) => {
      expect(provinces).toEqual(PROVINCESMOCK);
    });

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(PROVINCESMOCK);
  });
});
