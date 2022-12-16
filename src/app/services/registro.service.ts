import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Registro} from "../interfaces/registro.interface";

@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  private apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  postRegistro(registro: Registro) {
    return this.http.post(this.apiUrl + 'registro', registro);
  }
}
