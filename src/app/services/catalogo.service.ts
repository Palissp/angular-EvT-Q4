import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {environment} from "../../environments/environment";
import {Catalogo} from "../interfaces/catalogo.interface";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {

  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getCatalogos() {
    return lastValueFrom(this.http.get(this.apiUrl + 'productos')).then(res => res as Catalogo[]);
  }
}
