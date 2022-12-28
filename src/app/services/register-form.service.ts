import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Productos} from "../interfaces/productos.interface";
import {environment} from "../../environments/environment";
import {Provincias, ProvinciasID} from "../interfaces/provincias.interface";
import {Registro} from "../interfaces/formulario-registro.interface";

@Injectable({
  providedIn: 'root'
})
export class RegisterFormService {
  private apiUrlProductos = environment.apiUrl + 'productos';
  private apiUrlProvincias = environment.apiUrl + 'estado/provincias';
  private apiUrlRegister = environment.apiUrl + 'registro';

  private headerOptions = {
    "Accept": "*/*",
    " Content-Type": "application/json",
    }
  header: HttpHeaders= new HttpHeaders(this.headerOptions)

  constructor(private http: HttpClient) {
  }

  getProduct(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.apiUrlProductos)
  }

  getProvincias(): Observable<Provincias[]> {
    return this.http.get<Provincias[]>(this.apiUrlProvincias ).pipe(map(res => res as Provincias[]))
  }

  getProvinciasPorId(id: any): Observable<ProvinciasID[]> {
    return this.http.get<ProvinciasID[]>(`${this.apiUrlProvincias}/${id}`)
  }

  postNewRegister(body: Registro): Observable<Registro> {
    return this.http.post<Registro>(this.apiUrlRegister, body)
  }

}
