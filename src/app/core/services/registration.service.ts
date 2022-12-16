import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ResponseRegister } from '../../shared/models/responseRegister.model';
import { Register } from '../../shared/models/register.model';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private url = `${environment.apiPlayer}/registro`;

  constructor(private _http: HttpClient) {}

  sendRegister(item: Register): Observable<ResponseRegister> {
    return this._http
      .post(this.url, item)
      .pipe(map((res) => res as ResponseRegister));
  }
}
