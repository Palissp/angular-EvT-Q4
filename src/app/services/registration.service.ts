import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';



import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {handleError} from "../shared/functions/serviceValidation";
import {RegistrationFormInterface} from "../data/interfaces/registrationForm.interface";
import {environment} from "../../environments/environment";

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    private endpointProductos = 'productos';
    private endpointProvincias = 'estado/provincias';
    private URL = environment.apiHref + this.endpoint;
    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };

    constructor(private httpClient: HttpClient) {
    }

    public getAll(): Observable<RegistrationFormInterface[]> {
        return this.httpClient.get<RegistrationFormInterface[]>(this.URL).pipe(catchError(handleError));
    }
}
