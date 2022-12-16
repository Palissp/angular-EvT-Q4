import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Province } from 'src/app/shared/models/province.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  private url = `${environment.urlApi}`;

  constructor(private httpClient: HttpClient) {}

  getProvinces(): Observable<Province[]> {
    return this.httpClient
      .get(`${this.url}/estado/provincias`)
      .pipe(map((res) => res as Province[]));
  }

  getCantonByIdProvince(idProvince: string) {
    return this.httpClient
      .get(`${this.url}/estado/provincias/${idProvince}`)
      .pipe(map((res) => res as any[]));
  }
}
