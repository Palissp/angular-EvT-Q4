import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StatesService {
  url: string;

  constructor(
    private _httpClient: HttpClient,
  ) {
    this.url = environment.api;
   }

   getAllProvinces(): Observable<any> {
    return this._httpClient.get(`${this.url}/estado/provincias`).pipe(
      map((respuesta) => {
        return respuesta;
      }),
      catchError(err => {
        return throwError(err);
    }));
  }

  getAllStates(provinceId: string): Observable<any> {
    return this._httpClient.get(`${this.url}/estado/provincias/${provinceId}`).pipe(
      map((respuesta) => {
        return respuesta;
      }),
      catchError(err => {
        return throwError(err);
    }));
  }
}
