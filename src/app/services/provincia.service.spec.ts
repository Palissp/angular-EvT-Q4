import { TestBed } from '@angular/core/testing';

import { ProvinciaService } from './provincia.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {PROVINCIAMOCK} from "../mocks/provincia.mock";
import {environment} from "../../environments/environment";
import {Canton, Provincia} from "../interfaces/provincia.interface";
import {CANTONMOCK} from "../mocks/canton.mock";

describe('ProvinciaService', () => {
  let service: ProvinciaService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl;
  const mockProvincia: Provincia[] = PROVINCIAMOCK;
  const mockCanton: Canton[] = CANTONMOCK;

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

  it('should get provincias', () => {
    service.getProvincias().then((res) => {
      expect(res).toEqual(mockProvincia);
    });

    const req = httpTestingController.expectOne(apiUrl+'estado/provincias');
    expect(req.request.method).toEqual('GET');
    req.flush(mockProvincia);
  });

  it('should get cantones', () => {
    service.getCantones('BOL').then((res) => {
      expect(res).toEqual(mockCanton);
    });

    const req = httpTestingController.expectOne(apiUrl+'estado/provincias/BOL');
    expect(req.request.method).toEqual('GET');
    req.flush(mockCanton);
  });
});
