import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import {RegistroService} from "./services/registro.service";
import {CatalogoService} from "./services/catalogo.service";
import {ProvinciaService} from "./services/provincia.service";
import {HttpClientModule} from "@angular/common/http";

describe('AppComponent', () => {
  let catalogoService: CatalogoService;
  let provinciaService: ProvinciaService;
  let registroService: RegistroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule
      ],
      declarations: [
        AppComponent
      ],
      providers: [RegistroService, CatalogoService, ProvinciaService]
    }).compileComponents();
  });

  beforeEach(() => {
    registroService = TestBed.inject(RegistroService);
    catalogoService = TestBed.inject(CatalogoService);
    provinciaService = TestBed.inject(ProvinciaService)
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'jest-angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('jest-angular');
  });
});
