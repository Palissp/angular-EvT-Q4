import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from '../../../../../environments/environment.prod';
import { Catalogo } from '../../models/catalogo.model';

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  private apiUrl = environment.api;

  constructor(private http: HttpClient) { }

  getCatalogos() {
    return lastValueFrom(this.http.get(this.apiUrl)).then(res => res as Catalogo[]);
  }
}
