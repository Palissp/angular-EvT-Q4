import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {lastValueFrom} from "rxjs";
import { environment } from 'src/environments/environment';
import { Provincia } from '../../models/provincia.model';

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {
  private apiUrl = environment.api;
  constructor(private http: HttpClient) { }


  getProvincias() {
    return lastValueFrom(this.http.get(this.apiUrl)).then(res => res as Provincia[]);
  }
}
