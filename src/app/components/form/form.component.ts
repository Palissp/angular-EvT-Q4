import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Catalogo} from "../../interfaces/catalogo.interface";
import {Canton, Provincia} from "../../interfaces/provincia.interface";
import {CatalogoService} from "../../services/catalogo.service";
import {ProvinciaService} from "../../services/provincia.service";
import {Registro} from "../../interfaces/registro.interface";
import {RegistroService} from "../../services/registro.service";

@Component({
  selector: 'registro',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public registroForm: FormGroup = new FormGroup({
    nombre: new FormControl(null, [Validators.required]),
    apellido: new FormControl(null, [Validators.required]),
    correo: new FormControl(null, [Validators.required]),
    numero: new FormControl(null, [Validators.required]),
    provincia: new FormControl(null, [Validators.required]),
    ciudad: new FormControl(null, [Validators.required]),
  });

  catalogos: Catalogo[] = [];
  provincias: Provincia[] = [];
  cantones: Canton[] = [];
  informacion = false;
  condiciones = false;
  error = false;
  send = true;
  mensajeError = '';
  mensajeCorrecto = 'Formulario enviado exitosamente';
  validName = true;
  validLstaName = true;

  constructor(private catalogoService: CatalogoService,
              private provinciaService: ProvinciaService,
              private registroService: RegistroService) { }

  async ngOnInit() {
    this.send = false;
    this.error = false;
    this.validName = true;
    this.validLstaName = true;
    this.registroForm = new FormGroup({
      nombre: new FormControl(null, [Validators.required]),
      apellido: new FormControl(null, [Validators.required]),
      correo: new FormControl(null, [Validators.required]),
      numero: new FormControl(null, [Validators.required]),
      provincia: new FormControl(null, [Validators.required]),
      ciudad: new FormControl(null, [Validators.required]),
      condiciones: new FormControl(null, [Validators.required]),
    });

    await this.catalogoService.getCatalogos().then(res => this.catalogos = res).catch(() => {
      this.error = true;
      this.mensajeError = 'Ocurrio un error con los servicios intente de nuevamente';
    });
    this.catalogos.forEach(c => c.selected = false);
    await this.provinciaService.getProvincias().then(res => this.provincias = res).catch(() => {
      this.error = true;
      this.mensajeError = 'Ocurrio un error con los servicios intente de nuevamente';
    });
  }

  async onChangeProvincia() {
    const id = this.registroForm.controls['provincia'].value;
    await this.provinciaService.getCantones(id).then(res => this.cantones = res).catch(() => {
      this.error = true;
      this.mensajeError = 'Ocurrio un error con los servicios intente de nuevamente';
    });
  }

  onChangeCatalogo(event: any, idCatalogo: string) {
    this.catalogos.forEach(c => {
      if(c.id === idCatalogo) {
        c.selected = event.target.checked;
      }
    });
  }

  // @ts-ignore
  onClickEnviar() {
    const productos: string[] = [];
    this.catalogos.map(c => {
      if(c.selected) {
        productos.push(c.id);
      }
    });

    const registro: Registro = {
      name: this.registroForm.controls['nombre'].value,
      lastname: this.registroForm.controls['apellido'].value,
      email: this.registroForm.controls['correo'].value,
      phone: this.registroForm.controls['numero'].value,
      provincia: this.registroForm.controls['provincia'].value,
      ciudad: this.registroForm.controls['ciudad'].value,
      productos: productos,
      informacion: this.informacion
    }
    this.validName = true;
    this.validLstaName = true;
    if(registro.name === '' || registro.name === null) {
      this.validName = false;
    }else if(registro.lastname === '' || registro.lastname === null) {
      this.validLstaName = false;
    } else {
      this.registroService.postRegistro(registro).toPromise().then(() => {
        this.send = true;
      }).catch(() => {
        this.error = true;
        this.mensajeError = 'Ocurrio un error con el formulario intente nuevamente';
      });
    }
  }

  onChangeInformacion(desicion: boolean) {
    this.informacion = desicion;
  }

  onChangeTerminos(event:any) {
    this.condiciones = event.target.checked;
  }
}
