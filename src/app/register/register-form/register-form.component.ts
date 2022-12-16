import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../core/services/product-service/product.service";
import {ProductModel} from "../../models/product.model";
import {ProvinceModel} from "../../models/province.model";
import {LocationService} from "../../core/services/location-service/location.service";
import {CityModel} from "../../models/city.model";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup;
  public products: ProductModel[] = [];
  public provinces: ProvinceModel[] = [];
  public cities: CityModel[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private locationService: LocationService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(4), Validators.max(40)],],
      surname: ['', [Validators.required, Validators.min(4), Validators.max(40)],],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      information: ['', [Validators.required]],
      terms: ['', [Validators.required]],
      save: ['false'],
    });
  }

  ngOnInit(): void {
    this.getProductList();
    this.getProvinces();
  }

  getProductList() {
      this.productService.getProducts()
        .subscribe(resp => {
          this.products = resp;
        },
      )

  }

  getProvinces() {
    this.locationService.getProvinces().subscribe(resp => {
      this.provinces = resp
      this.getCities(this.provinces[0].codigo)
    })
  }

  onSelectProvince(event: Event) {
    //@ts-ignore
    this.getCities(event?.target?.value)
  }

  getCities(idProvinceSelected: string) {
    this.locationService.getCities(idProvinceSelected).subscribe(resp => {
      this.cities = resp
      console.log(this.cities)
    })
  }

}
