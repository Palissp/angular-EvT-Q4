import {HttpClientTestingModule,  HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { MOCKPROVINCIA } from '../../mocks/provincia.mock';
import { Provincia } from '../../models/provincia.model';

import { ProvinciaService } from './provincia.service';

describe('ProvinciaService', () => {
  let service: ProvinciaService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.api;
  const mockProvincia: Provincia[] = MOCKPROVINCIA;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [ProvinciaService]
    });
    service = TestBed.inject(ProvinciaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get Province', () => {
    service.getProvincias().then((res) => {
      expect(res).toEqual(mockProvincia);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockProvincia);
  });
});
