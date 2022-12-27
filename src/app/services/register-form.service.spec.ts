import {TestBed} from '@angular/core/testing';

import {RegisterFormService} from './register-form.service';
import {environment} from "../../environments/environment";
import {HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import {Productos} from "../interfaces/productos.interface";
import {Provincias, ProvinciasID} from "../interfaces/provincias.interface";

const mockResponseProducts: Productos [] = [
  {
    name: 'Tarjeta de crédito',
    id: 'tarjeta-de-credito'
  },
  {
    name: 'Tarjeta de débito',
    id: ' tarjeta-de-debito'
  },
  {
    name: 'Cuenta corriente',
    id: 'cuenta-corriente'
  },
  {
    name: 'Cuenta de ahorro',
    id: 'cuenta-de-ahorro'
  },
  {
    name: 'Cuenta de inversión',
    id: 'cuenta-de-inversion'
  },
  {
    name: 'Cuenta de ahorro para la vivienda',
    id: ' cuenta-de-ahorro-para-la-vivienda'
  },
  {
    name: ' Cuenta de ahorro para la jubilación',
    id: ' cuenta-de-ahorro-para-la-jubilacion'
  },
  {
    name: 'Cuenta de ahorro para la educación',
    id: ' cuenta-de-ahorro-para-la-educacion'
  }
]
const mockResponseProvinces: Provincias []= [
  {
    provincia: "AZUAY",
    codigo: "AZ"
  },
  {
    provincia: "BOLIVAR",
    codigo: "BOL"
  },
  {
    provincia: "SANTA ELENA",
    codigo: "SEL"
  }
]
const mockResponseProvincesById : ProvinciasID[] =
  [
    {
      id: "CNA",
      canton: "CUENCA"
    },
    {
      id: "GÓN",
      canton: "GIRÓN"
    },
    {
      id: "GAO",
      canton: "GUALACEO"
    },
    {
      id: "PTE",
      canton: "PAUTE"
    },
    {
      id: "PAA",
      canton: "PUCARA"
    },
    {
      id: "SNO",
      canton: "SAN FERNANDO"
    },
    {
      id: "SSL",
      canton: "SANTA ISABEL"
    },
    {
      id: "SSG",
      canton: "SIGSIG"
    },
    {
      id: "OAA",
      canton: "OÑA"
    },
    {
      id: "CEG",
      canton: "CHORDELEG"
    },
    {
      id: "EAN",
      canton: "EL PAN"
    },
    {
      id: "SAO",
      canton: "SEVILLA DE ORO"
    },
    {
      id: "GAA",
      canton: "GUACHAPALA"
    },
    {
      id: "CEZ",
      canton: "CAMILO PONCE ENRÍQUEZ"
    }
  ]
describe('RegisterFormService', () => {
  let service: RegisterFormService;
  let httpController: HttpTestingController;
  let apiUrlProducts = environment.apiUrl + 'productos';
  let apiUrlProvincias = environment.apiUrl + 'estado/provincias';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RegisterFormService]
    });
    service = TestBed.inject(RegisterFormService);
    httpController = TestBed.inject(HttpTestingController);
  });
  afterEach(() => {
    httpController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should receive a list of products', (doneFn) => {
    service.getProduct()
      .subscribe(data => {
        expect(data).toEqual(mockResponseProducts);
        doneFn();
      })


    const url = apiUrlProducts;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponseProducts);
  });
  it('should receive a list of provinces', (doneFn) => {
    service.getProvincias()
      .subscribe(data => {
        expect(data).toEqual(mockResponseProvinces);
        doneFn();
      })


    const url = apiUrlProvincias;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponseProvinces);
  });
  it('should receive a list of cities by ID in a province', (doneFn) => {

    const id = 'AZ';
    service.getProvinciasPorId(id)
      .subscribe(data => {
        expect(data).toEqual(mockResponseProvincesById);
        doneFn();
      })

    const url = `${apiUrlProvincias}/${id}`;
    const req = httpController.expectOne(url);
    expect(req.request.method).toEqual('GET');
    req.flush(mockResponseProvincesById);
  });

});
