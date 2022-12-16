import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../environments/environment";

describe('HomeService', () => {
  let service: HomeService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl;
  const mockTitle = 'API Exercise Q3 - Chapter Frontend';

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

  it('should get home', ()=> {
    service.getHome().then((res) => {
      expect(res).toEqual(mockTitle);
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('GET');
    req.flush(mockTitle);
  });
});
