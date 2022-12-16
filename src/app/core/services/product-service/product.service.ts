import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProductModel} from "../../../models/product.model";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly endpoint: string = 'https://api-q4.onrender.com'
  constructor(
    private _httpService: HttpClient,
  ) { }



  getProducts(): Observable<ProductModel[]> {
    return this._httpService.get(`${this.endpoint}/productos`,).pipe(map(res => res as ProductModel[]))
  }
}
