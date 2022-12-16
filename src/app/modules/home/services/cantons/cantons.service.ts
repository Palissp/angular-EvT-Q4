import { Injectable } from '@angular/core';
import { ENDPOINTS } from '../../../../cores/config/endpoints';
import { getApiUrl } from '../../../../cores/services/api-url';
import { CantonI } from '../../models/canton.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CantonsService {

  constructor(private http: HttpClient) { }

  getCantosByCode(code: string) {
    const url = getApiUrl(ENDPOINTS.CANTONS) + code;
    return this.http.get<CantonI[]>(url);
  }

}
