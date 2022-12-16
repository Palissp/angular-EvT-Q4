import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {RegisterModel} from "../../../models/register.model";
import {map, Observable} from "rxjs";
import {ResponseModel} from "../../../models/response.model";

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly endpoint: string = `${environment.api}/registro`
  constructor(
    private _httpService: HttpClient,
  ) {
  }

  sendRegister(register: RegisterModel): Observable<ResponseModel> {
    return this._httpService.post(this.endpoint, register).pipe(map(res => res as ResponseModel))
  }
}
