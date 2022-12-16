import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { lastValueFrom } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private apiUrl = environment.api;
  constructor(private http: HttpClient) { }

  getHome() {
    return lastValueFrom(this.http.get(this.apiUrl, {responseType: 'text'})).then(res => res);
  }


}
