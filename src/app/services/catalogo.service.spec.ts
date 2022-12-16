import { TestBed } from '@angular/core/testing';

import { CatalogoService } from './catalogo.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {CATALOGOMOCK} from "../mocks/catalogo.mock";
import {environment} from "../../environments/environment";
import {Catalogo} from "../interfaces/catalogo.interface";

describe('CatalogoService', () => {
  let service: CatalogoService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl + 'productos';
  const mockCatalogo: Catalogo[] = CATALOGOMOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [CatalogoService]
    });
    service = TestBed.inject(CatalogoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get catalogos', () => {
    service.getCatalogos().then((res) => {
      expect(res).toEqual(mockCatalogo);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCatalogo);
  });
});
