import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../../environments/environment';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  url: string;

  constructor(
    private _httpClient: HttpClient,
  ) {
    this.url = environment.api;
   }

   register(data: any): Observable<any> {
    return this._httpClient.post(`${this.url}/registro`, data).pipe(
      map((respuesta) => {
        return respuesta;
      }),
      catchError(err => {
        return throwError(err);
    }));
  }
}
