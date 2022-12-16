import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { City, Product, Province } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CatalogsService {
  readonly BASE_URL = environment.apiURL;

  constructor(private readonly _httpClient: HttpClient) {}

  getProvinces(): Observable<Province[]> {
    return this._httpClient.get<Province[]>(
      `${this.BASE_URL}/estado/provincias`
    );
  }

  getCitiesByProvinceCode(provinceCode: string): Observable<City[]> {
    return this._httpClient.get<City[]>(
      `${this.BASE_URL}/estado/provincias/${provinceCode}`
    );
  }

  getProducts(): Observable<Product[]> {
    return this._httpClient.get<Product[]>(`${this.BASE_URL}/productos`);
  }
}
