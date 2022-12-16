import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { Provincia } from 'src/app/modules/core/models/provincia.model';
import { Home} from 'src/app/modules/core/models/home.model';
import { CatalogoService } from 'src/app/modules/core/services/catalogo/catalogo.service';
import { ProvinciaService } from 'src/app/modules/core/services/provincia/provincia.service';
import { HomeService } from 'src/app/modules/core/services/home/home.service';
import { Catalogo } from 'src/app/modules/core/models/catalogo.model';
import { Registro } from 'src/app/modules/core/models/registro.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'Formulario de Registro';
  public formRegister!: FormGroup;
  home: Home = {title: ''} ;
  catalogos: Catalogo[] = [];
  provincias: Provincia[] = [];
  registro: Registro[] =[]

  constructor(
  private readonly fb: FormBuilder,
  private catalogoServices: CatalogoService,
  private provinciaService: ProvinciaService,
  private homeService: HomeService,
  ) { }

  ngOnInit(): void {
    this. getFormRegister()
    this.getTitle();
    this.getCatalogue();
    this.getProvince();
  }

  getFormRegister(){
    this.formRegister = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(40)]],
      lastName: ['', [Validators.required,Validators.minLength(8), Validators.maxLength(40)]],
      email: ['', [Validators.required,Validators.email]],
      phone: [null, [Validators.required,Validators.pattern("^[0-9]*$"),
      Validators.minLength(10), Validators.maxLength(10)]],
      provincia: [null, [Validators.required]],
      ciudad: [null, [Validators.required]],
      productos: [1, [Validators.required]],
      information : [1, [Validators.required]],
    });
  }


  get name(): FormControl{
    return this.formRegister.get('name') as FormControl
    }

  get lastName(): FormControl{
    return this.formRegister.get('lastName') as FormControl
      }

  get email(): FormControl{
    return this.formRegister.get('email') as FormControl
          }

  get phone(): FormControl{
   return this.formRegister.get('phone') as FormControl
         }

  getTitle() {
    this.homeService.getHome().then(data =>
       this.home.title = data);
  }

  async getProvince() {
    await this.provinciaService.getProvincias().then(data =>
       this.provincias = data);
  }

  async getCatalogue() {
    await this.catalogoServices.getCatalogos().then(data =>
      this.catalogos = data);
  }

  get isButtonDisabled(): boolean {
    return this.formRegister.invalid;
  }
}
