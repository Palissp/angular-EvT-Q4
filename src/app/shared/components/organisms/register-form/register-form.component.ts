import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductsService } from '@core/services/products.service';
import { RegisterService } from '@core/services/register.service';
import { StateService } from '@core/services/state.service';
import { RegisterUser } from '@shared/modesls/register-user.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  registerForm!: FormGroup;
  products: any;
  states: any;
  cities: any;

  constructor(
    private readonly fb: FormBuilder,
    private registerService: RegisterService,
    private productService: ProductsService,
    private stateService: StateService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.chargerProducts();
    this.chargerStates();
  }

  initForm() {
    this.registerForm = this.fb.group({
      name: ['', [Validators.required, Validators.min(4), Validators.max(40)]],
      lastname: [
        '',
        [Validators.required, Validators.min(4), Validators.max(40)],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(10),
          Validators.maxLength(10),
        ],
      ],
      province: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  chargerProducts() {
    this.productService.getProducts().subscribe((resp) => {
      this.products = resp;
      console.log(this.products);
    });
  }

  chargerStates() {
    this.stateService.getStates().subscribe((resp) => {
      this.states = resp;
      console.log(this.states);
    });
  }

  chargerCitiesByStateId() {
    this.stateService.getCitiesByStateCode('AZ').subscribe((resp) => {
      this.cities = resp;
      console.log(this.cities);
    });
  }

  sendRegisterData() {
    let registerUser = this.registerForm.value;

    let registerUserAux: RegisterUser = {
      name: registerUser.name,
      lastname: registerUser.lastname,
      email: registerUser.email,
      phone: registerUser.phone,
      provincia: registerUser.province,
      ciudad: registerUser.city,
      productos: ['Producto1', 'Producto2'],
      informacion: true,
    };
    this.registerService.saveRegister(registerUserAux).subscribe((res) => {
      console.log(res);
    });
  }
}
