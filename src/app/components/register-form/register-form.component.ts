import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, Validators } from '@angular/forms';
import { City } from 'src/app/models/city';
import { Product } from 'src/app/models/product';
import { State } from 'src/app/models/state';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  title = 'jest-angular';
  registerForm: FormGroup;
  products: Product[] = [];
  states: State[]=[];
  cities: City[]=[];

  get ordersFormArray() {
    return this.registerForm.controls['product'] as FormArray;
  }

  constructor(private formBuilder: FormBuilder,
    private commonService: CommonService) {
    this.registerForm = this.formBuilder.group({
      names: [],
      surname: ['',[Validators.required,Validators.minLength(4)]],
      email: [],
      telephone: [],
      state: [],
      city: [],
      product: new FormArray([])

    })
  }


  ngOnInit() {
    this.getProducts();
    this.getStates();


  }

  getProducts() {

    this.commonService.getProducts()
      .subscribe(
        respuesta => {
          this.products = respuesta;
          this.products.forEach(() => this.ordersFormArray.push(new FormControl(false)));

        })

  }

  getStates() {
    this.commonService.getProvincia()
      .subscribe(
        respuesta => {
          this.states = respuesta;
          

        })

  }

  getCities(id:any) { 

    var stateSelected = id.target.value.split(": ");
    this.commonService.getCity(stateSelected[1])
      .subscribe(
        respuesta => {
          this.cities = respuesta;
          

        })

  }
}