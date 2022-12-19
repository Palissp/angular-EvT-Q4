import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { City } from '../config/city.interface';
import { Endpoints } from '../config/endpoints.enum';
import { Product } from '../config/product.interface';
import { Province } from '../config/province.interface';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product[]>(environment.apiUrl + Endpoints.PRODUCTS);
  }

  getProvinces(){
    return this.http.get<Province[]>(environment.apiUrl + Endpoints.PROVINCES);
  }

  getCities(provinceId: string){
    return this.http.get<City[]>(environment.apiUrl + Endpoints.PROVINCES + '/' + provinceId);
  }

  register(body: any){
    return this.http.post(environment.apiUrl + Endpoints.REGISTER, body);
  }
}
