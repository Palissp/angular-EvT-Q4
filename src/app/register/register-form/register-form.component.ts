import {Component, ElementRef, OnInit, QueryList, ViewChildren} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductService} from "../../core/services/product-service/product.service";
import {ProductModel} from "../../models/product.model";
import {ProvinceModel} from "../../models/province.model";
import {LocationService} from "../../core/services/location-service/location.service";
import {CityModel} from "../../models/city.model";
import {RegisterModel} from "../../models/register.model";
import {RegisterService} from "../../core/services/register-service/register.service";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  @ViewChildren("products") productsCheckBoxes: QueryList<ElementRef> | undefined = undefined;



  public registerForm: FormGroup;
  public products: ProductModel[] = [];
  public provinces: ProvinceModel[] = [];
  public selectedProducts: string[] = [];
  public cities: CityModel[] = [];
  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private locationService: LocationService,
    private registerService: RegisterService
  ) {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.min(4), Validators.max(40)],],
      surname: ['', [Validators.required, Validators.min(4), Validators.max(40)],],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.required]],
      province: ['AZ', [Validators.required]],
      city: ['CNA', [Validators.required]],
      information: ['', [Validators.required]],
      terms: ['', [Validators.required]],
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

  buildRegister() {
    const register: RegisterModel = {
      provincia: this.registerForm.value.province,
      name: this.registerForm.value.name,
      productos: this.selectedProducts,
      phone: this.registerForm.value.telephone,
      lastname: this.registerForm.value.surname,
      email: this.registerForm.value.email,
      informacion: this.registerForm.value.information,
      ciudad: this.registerForm.value.city
    }
    return register
  }

  postRegister() {
    console.log(this.registerForm)
    const register = this.buildRegister()
    console.log(register)
    this.registerService.sendRegister(register).subscribe((response) => {
      console.log(response)
    })
  }

  setSelectedProducts(event: Event) {
    //@ts-ignore
    if (event.target.checked) {
      //@ts-ignore
      this.selectedProducts.push(event.target.value)
    } else {
      //@ts-ignore
      this.selectedProducts = [...this.selectedProducts.filter((product) => {return product !== event.target.value})]
    }
  }

  uncheckAll() {
    this.productsCheckBoxes?.forEach((element) => {
      element.nativeElement.checked = false;
    });
  }

  restart() {
    this.registerForm.reset(
      {
        province: 'AZ',
        city: 'CNA',
      }
    );
    this.selectedProducts = []
    this.uncheckAll()
  }

}
