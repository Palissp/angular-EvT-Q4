import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProductModel} from "../../../models/product.model";
import {environment} from "../../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private readonly endpoint: string = environment.api
  constructor(
    private _httpService: HttpClient,
  ) { }



  getProducts(): Observable<ProductModel[]> {
    return this._httpService.get(`${this.endpoint}/productos`,).pipe(map(res => res as ProductModel[]))
  }
}
