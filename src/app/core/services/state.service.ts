import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class StateService {
  private url = `${environment.apiRegister}/estado/provincias`;
  constructor(private _http: HttpClient) {}

  getStates(): Observable<any[]> {
    return this._http.get(this.url).pipe(map((res) => res as any[]));
  }

  getCitiesByStateCode(stateCode: string): Observable<any[]> {
    return this._http
      .get(`${this.url}/${stateCode}`)
      .pipe(map((res) => res as any[]));
  }
}
