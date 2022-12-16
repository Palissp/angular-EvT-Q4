import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from '../../shared/models/product.model';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url = `${environment.urlApi}/productos`;

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.httpClient.get(this.url).pipe(map((res) => res as Product[]));
  }

  saveProducts(data: FormData): Observable<any> {
    return this.httpClient.post(this.url, data).pipe(map((res) => res));
  }
}
