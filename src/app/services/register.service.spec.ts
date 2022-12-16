import { TestBed } from '@angular/core/testing';

import { RegisterService } from './register.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RegistrationSubmitBody } from '../interfaces';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpClient: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterService],
    });
    service = TestBed.inject(RegisterService);
    httpClient = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should register form', () => {
    const mockRespose = {
      success: true,
    };

    const body: RegistrationSubmitBody = {
      ciudad: '',
      email: '',
      informacion: true,
      lastname: 'l',
      name: 'n',
      phone: '1',
      productos: [],
      provincia: '',
    };

    service.submitRegistration(body).subscribe((response) => {
      expect(response).toEqual(mockRespose);
    });
    const request = httpClient.expectOne(`${service.BASE_URL}/registro`);
    expect(request.request.method).toBe('POST');
    request.flush(mockRespose);
  });
});
