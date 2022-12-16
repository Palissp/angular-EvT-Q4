import { Component, OnInit } from '@angular/core';
import { ProductService } from '@core/services/product.service';
import { ProvinceService } from '@core/services/province.service';
import { RegisterService } from '@core/services/register.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Select } from '@models/select.model';
import { CustomValidations } from '@shared/utils/validators/phone-validator';
import { delay, retry } from 'rxjs';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({});
  products: Select[] = [];
  provinces: Select[] = [];
  city: Select[] = [];
  informationOpts: Select[] = [];

  showForm: boolean = true;
  success: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private provinceService: ProvinceService,
    private registerService: RegisterService,
  ) { }

  ngOnInit(): void {
    this.initForm();
    this.getProducts();
    this.getProvinces();
    this.fillInformationOpts();
  }

  initForm() {
    this.form = this.fb.group({
      "name": ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      "lastname": ['', [Validators.required, Validators.minLength(4), Validators.maxLength(40)]],
      "email": ['', [Validators.required, Validators.email]],
      "phone": ['', [Validators.required, CustomValidations.phone]],
      "provincia": ['', [Validators.required]],
      "ciudad": ['', [Validators.required]],
      "informacion": [false, [Validators.required]],
      "terms": [false, [Validators.requiredTrue]],
      "productos": [false, [Validators.minLength(1)]],

    });

  }

  getProducts() {
    this.productService.getProducts()
      .pipe(
        retry(3),
        delay(1000)
      ).subscribe(res => {
        this.products = this.productService.getSelectByProducts(res);
      })

  }

  getProvinces() {
    this.provinceService.getProvinces().subscribe(res => {
      this.provinces = this.provinceService.getSelectByProvinces(res);
    })
  }

  saveRegister() {
    let register = this.form.value;
    console.log(this.form)
    this.registerService.saveRegister
      (register)
      .pipe(
        retry(3),
        delay(1000)
      ).subscribe(res => {
        this.showForm = false;
        this.success = true;
      })
  }

  fillInformationOpts() {
    this.informationOpts = [{
      label: 'No',
      value: false
    },
    {
      label: 'Si',
      value: true
    }]
  }

  reset() {
    this.form.reset();
  }
}
