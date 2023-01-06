import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { Product } from '../models/product';
import { State } from '../models/state';
import { City } from '../models/city';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    private http: HttpClient
  ) { }

 
  getProducts(): Observable<any> {
    return this.http.get<Product[]>("https://api-q4.onrender.com/productos")
    .pipe(
      map(respuesta => {
        return respuesta;
      }),
      catchError(err => {
        return (err);
      })
    );
  }

  getProvincia(): Observable<any> {
    return this.http.get<State[]>("https://api-q4.onrender.com/estado/provincias")
    .pipe(
      map(respuesta => {
        return respuesta;
      }),
      catchError(err => {
        return (err);
      })
    );
  }

  getCity(id:string): Observable<any> {
    return this.http.get<City[]>("https://api-q4.onrender.com/estado/provincias/"+id)
    .pipe(
      map(respuesta => {
        return respuesta;
      }),
      catchError(err => {
        return (err);
      })
    );
  }
}
