import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url: string;
  PRODUCTS = 'productos';

  constructor(private _httpClient: HttpClient) {
    this.url = environment.url;
  }

  async getProducts(){
    return await this._httpClient.get(`${this.url}/${this.PRODUCTS}`);
  }

}
