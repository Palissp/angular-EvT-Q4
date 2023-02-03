import {Component, OnInit} from '@angular/core';
import {RegistrationFormInterface} from "../../data/interfaces/registrationForm.interface";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {Router} from "@angular/router";
import {RegistrationService} from "../../services/registration.service";
import {ProvinciaInterface} from "../../data/interfaces/provincias.interface";
import {ProductosInterface} from "../../data/interfaces/productos.interface";
import { EXP_REGULARES } from 'src/app/shared/functions/exp-regulares';

@Component({
    selector: 'app-main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
    form: FormGroup;
    estadoProvincias: ProvinciaInterface[]=[];
    productos: ProductosInterface[]=[];
    agree = false;
    example: RegistrationFormInterface = {
        name: "",
        lastName: "",
        email: "",
        phone: "",
        provincia: "",
        ciudad: "",
        productos: [],
        informacion: false,
    };

    constructor(
        private router: Router,
        private registrationService: RegistrationService,
        builder: FormBuilder,
        ) {
        this.form = builder.group({
            name: ['',[Validators.required,Validators.maxLength(40),Validators.minLength(4)]],
            lastName:  ['',[Validators.required,Validators.maxLength(40),Validators.minLength(4)]],
            email:  ['',[Validators.required,Validators.pattern(EXP_REGULARES.EMAIL_PATTERN)]],
            phone: ['',[Validators.required,Validators.pattern(EXP_REGULARES.TELEFONOCELULAR_ECUADOR)]],
            provincia: ['',[Validators.required]],
            ciudad: ['',[Validators.required]],
            productos: [],
            informacion: false,

        });
    }
    getErrorMessage(nombreCampo:string) {


      return this.form.get(nombreCampo).hasError('required')
      ? 'El campo es obligatorio ingresar.'
      : this.form.get(nombreCampo).hasError("maxlength")
      ? 'El campo admite solo '+this.form.get(nombreCampo).getError("maxlength").requiredLength+' caracteres.'
      : this.form.get(nombreCampo).hasError("minlength")
      ? 'El campo admite como minimo solo '+this.form.get(nombreCampo).getError("minlength").requiredLength+' caracteres.'
      : this.form.get(nombreCampo).hasError("pattern")
      ? 'El valor del campo es incorrecto.'

      : "";



  }

    ngOnInit(): void {
        this.registrationService.getEstados().subscribe((data) => {
            console.log(data);
            this.estadoProvincias = data;
        });
        this.registrationService.getProductos().subscribe((data) => {
            console.log(data);
            this.productos = data;
        });
    }

    submitNewRegistration() {
        console.log(this.example);
        this.router.navigate(['success']);
    }

    retry() {
        this.router.navigate(['']);
    }

}
