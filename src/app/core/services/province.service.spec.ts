import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { CITYMOCK } from '@core/mocks/city.mock';
import { PROVINCEMOCK } from '@core/mocks/province.mock';
import { environment } from 'src/environments/environment';

import { ProvinceService } from './province.service';

describe('ProvinceService', () => {
  let service: ProvinceService;
  let httpTestingController: HttpTestingController;
  let url = `${environment.api}/estado/provincias`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [ProvinceService],
    });
    service = TestBed.inject(ProvinceService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('search provinces', () => {
    service.getProvinces().subscribe((provinces) => {
      expect(provinces).toEqual(PROVINCEMOCK)
    })

    const urlApi = `${url}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(PROVINCEMOCK);


  })

  it('search city by code province', () => {
    let idProvince = 'CAR'
    service.getCityByProvince(idProvince).subscribe((city) => {
      expect(city).toEqual(CITYMOCK)
    })

    const urlApi = `${url}/${idProvince}`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');

    req.flush(CITYMOCK);
  })

  it('get select by provinces', () => {

    let returned = service.getSelectByProvinces(PROVINCEMOCK);
    expect(returned[0].label).toEqual(PROVINCEMOCK[0].provincia);
    expect(returned[0].value).toEqual(PROVINCEMOCK[0].codigo);
  })

});
