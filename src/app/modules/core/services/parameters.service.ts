import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Canton, Province } from 'src/app/shared/interfaces/state.interface';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ParametersService {
  private readonly ENPOINT = environment.pathUrl;
  private readonly pathParameters = 'estado/provincias';

  constructor(private http: HttpClient) {}

  getProvinceList(): Observable<Province[]> | undefined {
    return this.http.get<Province[]>(`${this.ENPOINT}/${this.pathParameters}`);
  }

  getCantonList(provinceId: string): Observable<Canton[]> | undefined {
    return this.http.get<Canton[]>(
      `${this.ENPOINT}/${this.pathParameters}/${provinceId}`
    );
  }
}
