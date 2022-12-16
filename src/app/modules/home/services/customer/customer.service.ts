import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../cores/config/endpoints';
import { getApiUrl } from '../../../../cores/services/api-url';
import { HttpClient } from '@angular/common/http';
import { CustomerCatalogI } from '../../models/customer-catalog.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  postCustomer(data: CustomerCatalogI) {
    const url = getApiUrl(ENDPOINTS.CUSTOMER);
    return this.http.post(url, data);
  }
}
