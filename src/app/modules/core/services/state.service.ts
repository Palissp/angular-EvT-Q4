import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  private url: string;
  STATE ='estado/provincias';

  constructor(private _httpClient: HttpClient) {
    this.url = environment.url;
  }

  async getState(){
    return await this._httpClient.get(`${this.url}/${this.STATE}`);
  }

  async getStateById(id:string){
    return await this._httpClient.get(`${this.url}/${this.STATE}/${id}`);
  }
}
