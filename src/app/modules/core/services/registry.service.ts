import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registry } from 'src/app/shared/interfaces/registry.interface';
import { ResponseResult } from 'src/app/shared/interfaces/response.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistryService {
  private readonly ENPOINT = environment.pathUrl;
  private readonly pathParameters = 'registro';

  constructor(private http: HttpClient) {}

  postRegistry(registry: Registry): Observable<ResponseResult> | undefined {
    return this.http.post<ResponseResult>(
      `${this.ENPOINT}/${this.pathParameters}`,
      registry
    );
  }
}
