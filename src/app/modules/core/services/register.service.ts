import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IRegister } from '../interfaces/register.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private url: string;

  constructor(private _httpClient: HttpClient) {
    this.url = environment.url;
  }

  async createRegister(registerInfo: IRegister){

  }
}
