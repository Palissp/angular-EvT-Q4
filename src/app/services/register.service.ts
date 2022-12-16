import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { ReadCityModel } from '../models/read-city.model';
import { ReadProductModel } from '../models/read-product.model';
import { ReadProvinceModel } from '../models/read-province.model';
import { RegisterModel } from '../models/register.model';
const api_url = environment.url;

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private readonly _http: HttpClient) {}
  getAllProducts(): Observable<ReadProductModel[]> {
    return this._http.get<ReadProductModel[]>(`${api_url}/productos`);
  }

  getAllProvinces(): Observable<ReadProvinceModel[]> {
    return this._http.get<ReadProvinceModel[]>(`${api_url}/estado/provincias`);
  }
  getAllCities(codigo: string): Observable<ReadCityModel[]> {
    return this._http.get<ReadCityModel[]>(
      `${api_url}/estado/provincias/${codigo}`
    );
  }
  save(register: RegisterModel): Observable<any> {
    return this._http.post(`${api_url}/registro}`, register);
  }
}
