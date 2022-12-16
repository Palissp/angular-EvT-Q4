import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegister } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url: string;
  REGISTRO ='registro';

  constructor(private _httpClient: HttpClient) {
    this.url = environment.url;
  }

  async createRegister(registerInfo: IRegister){
    this._httpClient.post(`${this.url}/${this.REGISTRO}`,registerInfo);
  }
}
