import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {lastValueFrom} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getHome() {
    return lastValueFrom(this.http.get(this.apiUrl, {responseType: 'text'})).then(res => res);
  }
}
