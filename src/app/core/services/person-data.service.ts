import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Person } from 'src/app/shared/models/person.interface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonDataService {
  private url =  `${environment.apiPerson}`;

  constructor( private _http: HttpClient ) { }

  savePerson(person: Person): Observable<Person> {
    return this._http.post(`${this.url}registro/`, person).pipe(map(res => res as Person))
  }

  getProduct(): Observable<any> {
    return this._http.get<any>(`${this.url}productos`)
  }

  getStateProvince(): Observable<any> {
    return this._http.get<any>(`${this.url}estado/provincias`)
  }

}
