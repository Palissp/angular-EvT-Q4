import { TestBed } from '@angular/core/testing';
import { environment } from 'src/environments/environment';
import { HttpClientTestingModule, HttpTestingController} from "@angular/common/http/testing";
import { ProductService } from './product.service';

describe('ProductService', () => {
  let service: ProductService;
  let apiURL: string = environment.url;
  let httpTestingController:HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call getHome', (done) =>{
    const mockDataDto: string = 'API Exercise Q3 - Chapter Frontend';
    const mockDataResponse: string = 'API Exercise Q3 - Chapter Frontend';

    service.getHome().subscribe((data:any) =>{
      expect(data).toEqual(mockDataResponse)
      done()
    });

    const url = `${apiURL}`;
    const req = httpTestingController.expectOne(url);
    const request = req.request;

    expect(
      request.method
    ).toEqual('GET');

    req.flush(mockDataDto);
  });
});
