import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Province } from '../../shared/models/province.model';
import { ProductService } from '../../core/services/product.service';
import { ProvinceService } from '../../core/services/province.service';
import { Product } from '../../shared/models/product.model';
import { City } from '../../shared/models/city.model';
import { RegistrationService } from '../../core/services/registration.service';
import { Register } from '../../shared/models/register.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form = new FormGroup({});

  products: Product[] = [];

  provinces: Province[] = [];

  cities: City[] = [];

  disclaimer: boolean = false;

  register: Register = new Register();

  productosList: any;

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private provinceService: ProvinceService,
    private registrationService: RegistrationService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.getProducts();
    this.getProvinces();
  }

  initForm() {
    this.form = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.minLength(4),
        ],
      ],
      lastName: [
        '',
        [
          Validators.required,
          Validators.maxLength(40),
          Validators.minLength(4),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      provincia: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      productos: new FormArray([]),
      informacion: [null, [Validators.required]],
    });
  }

  getProducts() {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
      // this.products = [
      //   {
      //     name: 'TD',
      //     id: 'sa',
      //   },
      //   {
      //     name: 'Tc',
      //     id: 'a',
      //   },
      //   {
      //     name: 'Inver',
      //     id: 'b',
      //   },
      // ];
    });
  }

  getProvinces() {
    this.provinceService.getProvinces().subscribe((res) => {
      this.provinces = res;
    });
  }

  getCityByProvince(idProvince: string) {
    this.provinceService.getCityByProvince(idProvince).subscribe((res) => {
      this.cities = res;
    });
    console.log(this.form)
  }

  onCheckboxChange(event: any) {
    this.productosList = this.form.controls['productos'] as FormArray;
    if (event.target.checked) {
      this.productosList.push(new FormControl(event.target.value));
    } else {
      const index = this.productosList.controls.findIndex(
        (x: any) => x.value === event.target.value
      );
      this.productosList.removeAt(index);
    }
  }

  send() {
    this.register = this.form.value;
    this.register.productos = this.productosList.value;
    console.log(this.register);
    console.log(this.productosList.value);

    this.registrationService.sendRegister(this.register);
  }

  reset() {
    this.form.reset();
  }
}
