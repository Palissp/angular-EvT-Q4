import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {environment} from '@env/environment';
import {AreaService} from '@services/area.service';

describe('AreaService', () => {

    let myService: AreaService;
    let httpController: HttpTestingController
    let API_URL = environment.apiBaseHref + 'areas';

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [AreaService]
        });
        myService = TestBed.inject(AreaService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should be created', () => {
        expect(myService).toBeTruthy();
    });

    it('test fn #getAll', (doneFn) => {

        const mockData: any = {}

        myService.getAll().subscribe(data => {
            expect(data).toEqual(mockData);
            doneFn();
        })

        const url = `${API_URL}`;
        const req = httpController.expectOne(url);
        expect(req.request.method).toEqual('GET');
        req.flush(mockData);
    });
});
