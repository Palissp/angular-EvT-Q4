import { Injectable } from '@angular/core';
import { Province } from '@models/province.model';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { City } from '@models/city.model';
import { Select } from '@models/select.model';


@Injectable({
  providedIn: 'root'
})
export class ProvinceService {
  private url = `${environment.api}/estado/provincias`;

  constructor(
    private _http: HttpClient,
  ) { }

  getProvinces(): Observable<Province[]> {

    return this._http.get(this.url,).pipe(map(res => res as Province[]))
  }

  getCityByProvince(provinceId: string): Observable<City[]> {
    let urlById = `${this.url}/${provinceId}`
    return this._http.get(urlById,).pipe(map(res => res as City[]))
  }


  getSelectByProvinces(provinces: Province[]): Select[] {
    return provinces.map(province => {
      return { value: province.codigo, label: province.provincia }
    })
  }
}
