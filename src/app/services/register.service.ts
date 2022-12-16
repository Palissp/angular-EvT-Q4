import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RegistrationSubmitBody } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  readonly BASE_URL = environment.apiURL;

  constructor(private readonly _httpClient: HttpClient) {}

  submitRegistration(registrationBody: RegistrationSubmitBody) {
    return this._httpClient.post<any>(
      `${this.BASE_URL}/registro`,
      registrationBody
    );
  }
}
