import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Product } from '../../shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = `${environment.apiPlayer}/productos`;

  constructor(private _http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this._http.get(this.url).pipe(map((res) => res as Product[]));
  }
}
