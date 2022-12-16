import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { Product } from '@models/product.model';
import { HttpClient } from '@angular/common/http';
import { Select } from '@models/select.model';


@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = `${environment.api}/productos`;
  constructor(
    private _http: HttpClient,
  ) { }

  getProducts(): Observable<Product[]> {

    return this._http.get(this.url,).pipe(map(res => res as Product[]))
  }

  getSelectByProducts(products: Product[]): Select[] {
    return products.map(products => {
      return { value: products.id, label: products.name }
    })
  }
}
