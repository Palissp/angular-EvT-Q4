import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Injectable} from '@angular/core';



import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {handleError} from "../shared/functions/serviceValidation";
import {RegistrationFormInterface} from "../data/interfaces/registrationForm.interface";
import {environment} from "../../environments/environment";
import {ProductosInterface} from "../data/interfaces/productos.interface";
import {ProvinciaInterface} from "../data/interfaces/provincias.interface";
import {CantonInterface} from "../data/interfaces/canton.interface";

@Injectable({
    providedIn: 'root',
})
export class RegistrationService {
    private URL = environment.apiHref;
    private httpOptions = {
        headers: new HttpHeaders({'Content-Type': 'application/json'}),
    };

    constructor(private httpClient: HttpClient) {
    }

    public getProductos(): Observable<ProductosInterface[]> {
        return this.httpClient.get<ProductosInterface[]>(this.URL+'/productos').pipe(catchError(handleError));
    }
    public getEstados(): Observable<ProvinciaInterface[]> {
        return this.httpClient.get<ProvinciaInterface[]>(this.URL+'/estado/provincias').pipe(catchError(handleError));
    }
    public getProvinciaById(provincia:string ): Observable<CantonInterface[]> {
        return this.httpClient.get<CantonInterface[]>(this.URL+'/estado/provincias/'+provincia).pipe(catchError(handleError));
    }
    public postRegistro(registrationFormObject:RegistrationFormInterface): Observable<RegistrationFormInterface> {
        const body = JSON.stringify(registrationFormObject);
        return this.httpClient.post<RegistrationFormInterface>(this.URL+'/registro',body, this.httpOptions).pipe(catchError(handleError));
    }
}
