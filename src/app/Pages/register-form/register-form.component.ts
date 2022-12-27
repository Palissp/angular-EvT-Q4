import { Component } from '@angular/core';
import {FormArray, FormBuilder, FormGroup, Validators} from "@angular/forms";
import {RegisterFormService} from "../../services/register-form.service";
import {Productos} from "../../interfaces/productos.interface";
import {Observable} from "rxjs";
import {Provincias, ProvinciasID} from "../../interfaces/provincias.interface";
import {Registro} from "../../interfaces/formulario-registro.interface";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent  {
  formRegister!: FormGroup
  productosLista$: Observable<Productos[]>;
  provinviasLista$: Observable<Provincias[]>;
  ciudadesLista$: Observable<ProvinciasID[]>;
  formValue!: Registro;
  constructor(private formBuilder: FormBuilder,
              private registerService: RegisterFormService) {
    this.buildForm();
    this.provinviasLista$ = this.registerService.getProvincias()

    this.productosLista$ = this.registerService.getProduct();
    this.ciudadesLista$ = this.registerService.getProvinciasPorId('AZ');
    this.formRegister.valueChanges.subscribe( ({ condiciones, ...rest }) => {
      // delete form.condiciones;
      this.formValue = rest;
    })
  }

  buildForm(){
    this.formRegister = this.formBuilder.group({
      name: [null, Validators.required, Validators.minLength(4),Validators.maxLength(40)],
      lastname : [null, Validators.required, Validators.minLength(4),Validators.maxLength(40)],
      email    : [null, Validators.required, Validators.email],
      phone: [null, Validators.required, Validators.pattern("^(\\+593|0009|593)?[6789]\\d{9}$")],
      provincia:  [null, Validators.required],
      ciudad:  [null, Validators.required],
      productos: [],
      informacion: [true, Validators.required],
      condiciones: [false, Validators.requiredTrue]
    });




  }
  addNewRegister(){
    this.formValue = {...this.formRegister.getRawValue()};


    console.log(this.formValue, 'form')
    if (this.formRegister.invalid) {
      this.formRegister.markAllAsTouched()
      // variable para cambiar color de borde?
      return;
    }
    // peticion post
 this.registerService.postNewRegister(this.formValue)
   .subscribe({
     next: res => {
       console.log(res, 'res de post');
      // alert(`${res.message}`)
     },
     error: error => {
       // document.getElementById('email').innerHTML = error.message;
       // document.getElementById('phone').innerHTML = error.message;

       alert(`${error.message}`)
     }
   })
  }
  isValid(formControlName: string){
    return this.formRegister.controls[formControlName].touched
      && this.formRegister.controls[formControlName].errors

  }
  resetForm(){
    this.formRegister.reset()
  }
  get ProductsArray() {
    return <FormArray>this.formRegister.get('productos')
  }
  checkCategoriesControlTouched() {
    let flg = false;
    this.ProductsArray.controls.forEach((control: any) => {
      if (control.touched) {
        flg = true;
      }
    });
    return flg;
  }

}
