import { Injectable } from '@angular/core';
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {ProvinceModel} from "../../../models/province.model";

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  private readonly endpoint: string = `${environment.api}/estado`
  constructor(
    private _httpService: HttpClient,
  ) { }

  getProvinces(): Observable<ProvinceModel[]> {
    return this._httpService.get(`${this.endpoint}/provincias`,).pipe(map(res => res as ProvinceModel[]))
  }
}
