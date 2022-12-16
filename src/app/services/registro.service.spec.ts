import { TestBed } from '@angular/core/testing';

import { RegistroService } from './registro.service';
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {environment} from "../../environments/environment";
import {Registro} from "../interfaces/registro.interface";

describe('RegistroService', () => {
  let service: RegistroService;
  let httpTestingController: HttpTestingController;
  const apiUrl = environment.apiUrl+'registro';
  const mockRegistro: Registro = {
    name: 'Eduardo',
    lastname: 'Albuja',
    email: 'ealbujat@pichincha.com',
    phone: '0992978201',
    informacion: true,
    provincia: 'BOL',
    ciudad: 'GAA',
    productos: [
      'tarjeta-de-credito',
      'tarjeta-de-debito'
    ]
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule
      ],
      providers:[RegistroService]
    });
    service = TestBed.inject(RegistroService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should post registro', () => {
    service.postRegistro(mockRegistro).toPromise().then(res => {
      expect(res).toEqual(mockRegistro);
    })

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toEqual('POST');
    req.flush(mockRegistro);
  })
});
