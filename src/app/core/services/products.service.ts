import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private url = `${environment.apiRegister}/productos`;
  constructor(private _http: HttpClient) {}

  getProducts(): Observable<any[]> {
    return this._http.get(this.url).pipe(map((res) => res as any[]));
  }
}
