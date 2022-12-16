import {TestBed} from '@angular/core/testing';

import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RegistrationService} from "./registration.service";
import {environment} from "../../environments/environment";
import {RegistrationFormInterface} from "../data/interfaces/registrationForm.interface";
import {ProductosInterface} from "../data/interfaces/productos.interface";



describe('RegistrationService', () => {

    let myService: RegistrationService;
    let httpController: HttpTestingController
    let API_URL = environment.apiHref;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [RegistrationService]
        });
        myService = TestBed.inject(RegistrationService);
        httpController = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpController.verify();
    });

    it('should be created', () => {
        expect(myService).toBeTruthy();
    });

    it('test fn #getProductos', (doneFn) => {

        const mockData: any = {}

        myService.getProductos().subscribe(data => {
            expect(data).toEqual(mockData);
            doneFn();
        })

        const url = `${API_URL}/productos`;
        const req = httpController.expectOne(url);
        expect(req.request.method).toEqual('GET');
        req.flush(mockData);
    });
    it('test fn #getProvinciaById', (doneFn) => {

        const mockData: any = {}
        const mockParameter= "PAS"

        myService.getProvinciaById(mockParameter).subscribe(data => {
            expect(data).toEqual(mockData);
            doneFn();
        })

        const url = `${API_URL}/estado/provincia/${mockParameter}`;
        const req = httpController.expectOne(url);
        expect(req.request.method).toEqual('GET');
        req.flush(mockData);
    });
    it('should return a new RegistrationFormInterface', (doneFn) => {
        // Arrange

        const mockData: RegistrationFormInterface = {
            name: "test",
            lastName: "test",
            email: "test",
            phone: "test",
            provincia: "test",
            ciudad: "test",
            productos:[],
            informacion:true,
        }
        // Act
        myService.postRegistro(mockData)
            .subscribe(data => {
                // Assert
                expect(data).toEqual(mockData);
                doneFn();
            });

        // http config
        const url = `${API_URL}/registro`;
        const req = httpController.expectOne(url);
        req.flush(mockData);
        expect(req.request.body).toEqual(JSON.stringify(mockData));
        expect(req.request.method).toEqual('POST');
    });

});
