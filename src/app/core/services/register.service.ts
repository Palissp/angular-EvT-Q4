import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '@models/register.model';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  private url =  `${environment.api}/registro`;

  constructor(
    private _http: HttpClient,
  ) { }

  saveRegister(register: Register): Observable<any> {

    return this._http.post(this.url, register).pipe(map(res => res as any))
  }
}
