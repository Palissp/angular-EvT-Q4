import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../cores/config/endpoints';
import { getApiUrl } from '../../../../cores/services/api-url';
import { ProductCatalogI } from '../../models/product-catalog.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts() {
    const url = getApiUrl(ENDPOINTS.PRODUCTS);
    return this.http.get<ProductCatalogI[]>(url);
  }
 
}
