import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Province } from '../../shared/models/province.model';
import { City } from '../../shared/models/city.model';

@Injectable({
  providedIn: 'root',
})
export class ProvinceService {
  private url = `${environment.apiPlayer}/estado/provincias`;

  constructor(private _http: HttpClient) {}

  getProvinces(): Observable<Province[]> {
    return this._http.get(this.url).pipe(map((res) => res as Province[]));
  }

  getCityByProvince(idProvince: string): Observable<City[]> {
    const url = `${this.url}/${idProvince}`;
    return this._http.get(url).pipe(map((res) => res as City[]));
  }
}
