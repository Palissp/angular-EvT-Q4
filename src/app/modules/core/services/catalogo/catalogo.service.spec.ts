import { TestBed } from '@angular/core/testing';


import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { environment } from 'src/environments/environment';
import { CATALOGOMOCK } from '../../mocks/catalogo.mock';
import { Catalogo } from '../../models/catalogo.model';
import { CatalogoService } from './catalogo.service';

describe('CatalogoService', () => {
  let service: CatalogoService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.api;
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

  it('should get Catalogue', () => {
    service.getCatalogos().then((res) => {
      expect(res).toEqual(mockCatalogo);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockCatalogo);
  });
});
