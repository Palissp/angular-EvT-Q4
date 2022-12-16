import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import {CatalogoService} from "../../services/catalogo.service";
import {ProvinciaService} from "../../services/provincia.service";
import {RegistroService} from "../../services/registro.service";
import {HttpClientModule} from "@angular/common/http";

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let catalogoService: CatalogoService;
  let provinciaService: ProvinciaService;
  let registroService: RegistroService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [HttpClientModule],
      providers: [RegistroService, CatalogoService, ProvinciaService]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    registroService = TestBed.inject(RegistroService);
    catalogoService = TestBed.inject(CatalogoService);
    provinciaService = TestBed.inject(ProvinciaService)
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should onChangeInformacion', () => {
    component.onChangeInformacion(true);
    expect(component.informacion).toBeTruthy();
  });

  it('should onChangeTerminos', () => {

    const event: any = {
      target: {
        checked: false
      }
    }

    component.onChangeTerminos(event);
    expect(component.informacion).toBeFalsy();
  });
});
