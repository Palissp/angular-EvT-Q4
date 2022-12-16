import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {environment} from "../../environments/environment";
import {Canton, Provincia} from "../interfaces/provincia.interface";

@Injectable({
  providedIn: 'root'
})
export class ProvinciaService {

  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  getProvincias() {
    return lastValueFrom(this.http.get(this.apiUrl+ 'estado/provincias')).then(res => res as Provincia[]);
  }

  getCantones(id: string) {
    return lastValueFrom(this.http.get(this.apiUrl+ `estado/provincias/${id}`)).then(res => res as Canton[]);
  }
}
