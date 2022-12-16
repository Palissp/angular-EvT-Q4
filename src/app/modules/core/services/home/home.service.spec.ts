import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment.prod';

import { HomeService } from './home.service';

describe('HomeService', () => {
  let service: HomeService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.api;
  const mockTitle = 'Formulario de Registro';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[HomeService]
    });
    service = TestBed.inject(HomeService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should method get ', ()=> {
    service.getHome().then((res) => {
      expect(res).toEqual(mockTitle);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockTitle);
  });
});
