import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { RegisterUser } from '@shared/modesls/register-user.model';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  private url = `${environment.apiRegister}/registro`;
  constructor(private _http: HttpClient) {}

  saveRegister(registerUser: RegisterUser): Observable<RegisterUser> {
    return this._http
      .post(this.url, registerUser)
      .pipe(map((res) => res as RegisterUser));
  }
}
