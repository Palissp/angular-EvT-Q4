import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../../../environments/environment";
import {REGISTERMOCK} from "../../mocks/register.mock";
import {RESPONSEMOCK} from "../../mocks/response.mock";
import {CityModel} from "../../../models/city.model";
import {CITIESMOCK} from "../../mocks/city.mock";
import {ResponseModel} from "../../../models/response.model";

describe('RegisterService', () => {
  let service: RegisterService;
  const url = `${environment.api}/registro`;
  const mockResponse: ResponseModel = RESPONSEMOCK;


  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [RegisterService],
    });
    service = TestBed.inject(RegisterService);
    httpTestingController = TestBed.inject(HttpTestingController)

  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('send request with register', () => {
    service.sendRegister(REGISTERMOCK).subscribe((response) => {
      expect(response).toEqual(mockResponse)
    })
    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);
    expect(req.request.method).toEqual('POST');

    req.flush(mockResponse);

  })
});
