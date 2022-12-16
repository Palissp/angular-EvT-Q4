import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { PersonDataService } from './person-data.service';
import { environment } from '../../../environments/environment';
import { Person } from 'src/app/shared/models/person.interface';
import { PERSONMOCK } from '../../core/mocks/person.mock';

describe('PersonDataService', () => {
  let service: PersonDataService;
  let httpTestingController: HttpTestingController;
  const url = `${environment.apiPerson}`;
  const mockPerson: Array<Person> = PERSONMOCK;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpClientTestingModule,
      ],
      providers: [PersonDataService],
    });
    service = TestBed.inject(PersonDataService);
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('save info person', () => {
    service.savePerson(PERSONMOCK[0]).subscribe( (person) => {
      expect(person).toEqual(mockPerson)
    })

    const urlApi = `${url}registro/`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('POST');

    req.flush(mockPerson);
  })

  it('get products', () => {

    service.getProduct().subscribe((res) => {

    })

    const urlApi = `${url}productos`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');
  })

  it('get state and province', () => {

    service.getStateProvince().subscribe((res) => {

    })

    const urlApi = `${url}estado/provincias`;
    const req = httpTestingController.expectOne(urlApi);

    expect(req.request.method).toEqual('GET');
  })
});
