import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { AuthorInterceptor } from './author.interceptor';

describe('AuthorInterceptor', () => {

  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        AuthorInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: AuthorInterceptor,
          multi: true
        }
      ]
    })
    httpClient = TestBed.inject(HttpClient)
    httpTestingController = TestBed.inject(HttpTestingController)
  });

  it('should be created', () => {
    const interceptor: AuthorInterceptor = TestBed.inject(AuthorInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('add header AuthorID', () => {
    const url = 'http://localhost:8000/products'
    const HEADER = 'author'

    httpClient.post(url, {}).subscribe()

    const req = httpTestingController.expectOne(url);
    const headers = req.request.headers;

    expect(
      headers.has(HEADER)
    ).toBeTruthy();

    httpTestingController.verify();

  })
});
