import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';

import { RegisterService } from './register.service';

describe('RegisterService', () => {
  let service: RegisterService;
  let httpTestingController: HttpTestingController;

  let url = `${environment.api}/registro`;

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

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('save register', () => {
    service.saveRegister({}).subscribe((register) => {
      expect(register).toEqual({})
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('POST');

    req.flush({});


  })
});
