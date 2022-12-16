import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly ENPOINT = environment.pathUrl;
  private readonly pathParameters = 'productos';

  constructor(private http: HttpClient) {}

  getProductsList(): Observable<Product[]> | undefined {
    return this.http.get<Product[]>(`${this.ENPOINT}/${this.pathParameters}`);
  }
}
