import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url: string;

  constructor(
    private _httpClient: HttpClient,
  ) {
    this.url = environment.api;
   }

   getAllProducts(): Observable<any> {
    return this._httpClient.get(`${this.url}/productos`).pipe(
      map((respuesta) => {
        return respuesta;
      }),
      catchError(err => {
        return throwError(err);
    }));
  }
}
