import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IProvince } from '../interfaces/province.interface';
import { ICanton } from '../interfaces/canton.interface';
import { IProduct } from '../interfaces/product.interface';
import { Register } from '../models/register.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  static URL = environment.apiUrl;
  static PROVINCIES = 'provincias';
  static STATE = 'estado';
  static PRODUCTS = 'productos';
  static REGISTER = 'registro';

  constructor(private http: HttpClient) {}

  getProvinces(): Observable<IProvince[]> {
    return this.http.get<IProvince[]>(
      `${ProductService.URL}/${ProductService.STATE}/${ProductService.PROVINCIES}`
    );
  }

  getCities(id: string): Observable<ICanton[]> {
    return this.http
      .get<ICanton[]>(
        `${ProductService.URL}/${ProductService.STATE}/${ProductService.PROVINCIES}/${id}`
      )
      .pipe(retry(2));
  }

  getProducts(): Observable<IProduct[]> {
    return this.http
      .get<IProduct[]>(`${ProductService.URL}/${ProductService.PRODUCTS}`)
      .pipe(retry(2));
  }

  saveRegister(data: Register): Observable<any> {
    return this.http.post<any>(
      `${ProductService.URL}/${ProductService.REGISTER}`,
      data
    );
  }
}
