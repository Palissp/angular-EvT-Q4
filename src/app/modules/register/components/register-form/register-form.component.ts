import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '../../../../modules/core/services/products/products.service';
import { RegisterService } from '../../../../modules/core/services/register/register.service';
import { StatesService } from '../../../../modules/core/services/states/states.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  registerForm: FormGroup;
  products: any[];
  provinces: any[];
  states: any[] = [];
  selectedProvince: string;
  showImage: boolean = false;
  showSuccessImage: boolean = false;
  isSend: boolean = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _productsService: ProductsService,
    private _registerService: RegisterService,
    private _statesService: StatesService,
  ) { }

  ngOnInit(): void {
    this.setForm();
    this.getAllProducts();
    this.getAllProvinces();
  }

  setForm(): void {
    this.registerForm = this._formBuilder.group({
      name: [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ])],
      lastname: [null, Validators.compose([
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(40),
      ])],
      email: [null, Validators.compose([
        Validators.required,
        Validators.email,
      ])],
      phone: [null, Validators.required],
      provincia: [null, Validators.required],
      ciudad: [null, Validators.required],
      productos: [[], Validators.compose([
        Validators.required,
        Validators.minLength(2),
        Validators.maxLength(4),
      ])],
      informacion: [null, Validators.required],
      terminos: [false, Validators.required],
    });
  }

  getAllProducts(): void {
    this._productsService.getAllProducts()
    .subscribe(
      (products) => this.products = products,
      (error) => location.reload(),
      );
  }

  getAllProvinces(): void {
    this._statesService.getAllProvinces()
    .subscribe(
      (provinces) => this.provinces = provinces,
      (error) => {},
      );
  }

  getStates(province: any): void {
    const provinceCode = province.split(',')[1];
    this._statesService.getAllStates(provinceCode)
    .subscribe(
      (states) => this.states = states,
      (error) => {},
      );
  }

  onProductChange(productChecked: string): void {
    const productArray = this.registerForm.get('productos').value;
    const productExists = productArray.find(product => product === productChecked);

    if (productExists) {
      const index = productArray.indexOf(productChecked);
      productArray.splice(index, 1)
    } else {
      productArray.push(productChecked)
    }
    this.registerForm.controls['productos'].setValue(productArray);
  }

  send(): void {
    this.isSend = true;

    if (this.registerForm.invalid)  return;

    this.showImage = true;
    this._registerService.register(this.registerForm.value)
    .subscribe(
      (response) => this.showSuccessImage = true,
      (error) => this.showSuccessImage = false,
    );
  }

  reset(): void {
    this.registerForm.reset();
    this.states = [];
    this.showImage = false;
    this.isSend = false;
  }
}
