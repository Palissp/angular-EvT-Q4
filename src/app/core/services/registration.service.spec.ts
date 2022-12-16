import { TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RegistrationService } from './registration.service';
import { environment } from '../../../environments/environment';
import { Register } from '../../shared/models/register.model';

describe('RegistrationService', () => {
  let service: RegistrationService;
  let httpTestingController: HttpTestingController;
  const url = `${environment.apiPlayer}/registro`;
  let register: Register = {
    name: 'Edu',
    lastname: 'Aldz',
    email: 'jj@dd.com',
    phone: '09999',
    provincia: 'Pichincha',
    ciudad: 'Quito',
    informacion: false,
    productos: [],
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegistrationService],
    });
    service = TestBed.inject(RegistrationService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('save register', () => {
    service.sendRegister(register).subscribe((player) => {
      expect(player).toEqual(register);
    });

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('POST');

    req.flush(register);
  });
});
