import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../cores/config/endpoints';
import { getApiUrl } from '../../../../cores/services/api-url';
import { ProvinceI } from '../../models/province.model';

@Injectable({
  providedIn: 'root'
})
export class ProvincesService {
  constructor(private http: HttpClient) { }

  getProvinces() {
    const url = getApiUrl(ENDPOINTS.PROVINCES);
    return this.http.get<ProvinceI[]>(url);
  }


}
