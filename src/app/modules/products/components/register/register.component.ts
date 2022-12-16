import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from '@angular/forms';
import { ISelect } from '../../../../shared/interfaces/select.interface';
import { ICanton } from '../../interfaces/canton.interface';
import { IProduct } from '../../interfaces/product.interface';
import { IProvince } from '../../interfaces/province.interface';
import { Register } from '../../models/register.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  productForm: FormGroup;
  provinces: ISelect[] = [];
  showForm = false;

  cantons: ISelect[] = [];
  products: ISelect[] = [];

  register: Register;

  showStatusResult = false;
  typeResult: 'error' | 'success' = 'error';

  private _optionRadio: ISelect[] = [
    {
      value: 'true',
      label: 'Si',
    },
    {
      value: 'false',
      label: 'No',
    },
  ];
  public get optionRadio(): ISelect[] {
    return this._optionRadio;
  }
  public set optionRadio(value: ISelect[]) {
    this._optionRadio = value;
  }

  term: ISelect[] = [
    {
      selected: true,
      value: 'true',
      label: '¿Aceptas nuestros términos y condiciones?',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private _productService: ProductService
  ) {
    this.productForm = this.createForm();
    this.register = this.setRegister();
  }

  ngOnInit(): void {
    this.changeForm();
    this.getProvincies();
    this.getProducts();
  }

  setRegister() {
    return {
      name: '',
      lastname: '',
      email: '',
      phone: '',
      provincia: '',
      ciudad: '',
      productos: [],
      informacion: true,
    };
  }
  createForm() {
    return this.fb.group({
      fullname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(40),
        ],
      ],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required]],
      province: ['', [Validators.required]],
      city: ['', [Validators.required]],
      products: ['', [Validators.required]],
      aditionalInfo: ['', [Validators.required]],
      terms: ['', [Validators.required, Validators.requiredTrue]],
    });
  }

  getNameControl(nameControl: string) {
    return this.productForm.get(nameControl) as FormControl;
  }

  changeForm() {
    this.productForm.valueChanges.subscribe((value) => {
      if (value.province) {
        this.getCantons(value.province);
      }
    });
  }

  getProvincies() {
    this._productService.getProvinces().subscribe((res) => {
      if (res) {
        this.formatProvinces(res);
        this.showForm = true;
      }
    });
  }

  formatProvinces(data: IProvince[]) {
    this.provinces = [];
    data.map((d) => {
      this.provinces.push({
        label: d.provincia,
        value: d.codigo,
      });
    });
  }

  getCantons(id: string) {
    this._productService.getCities(id).subscribe((res) => {
      if (res) {
        this.formatCantos(res);
      }
    });
  }

  formatCantos(data: ICanton[]) {
    this.cantons = [];
    data.map((d) => {
      this.cantons.push({
        label: d.canton,
        value: d.id,
      });
    });
  }

  getProducts() {
    this._productService.getProducts().subscribe((res) => {
      if (res) {
        this.formatProducts(res);
      }
    });
  }

  formatProducts(data: IProduct[]) {
    this.products = [];
    data.map((d) => {
      this.products.push({
        label: d.name,
        value: d.id,
      });
    });
  }

  completeDataToSave() {
    this.register.name = this.getNameControl('fullname').value;
    this.register.lastname = this.getNameControl('lastname').value;
    this.register.email = this.getNameControl('email').value;
    this.register.phone = this.getNameControl('phone').value;
    this.register.provincia = this.getNameControl('province').value;
    this.register.ciudad = this.getNameControl('city').value;
    this.register.productos = [this.getNameControl('products').value];
    this.register.informacion = this.getNameControl('terms').value;
  }

  save() {
    this.completeDataToSave();
    this._productService.saveRegister(this.register).subscribe(
      (res) => {
        this.showStatusResult = true;
        this.typeResult = 'success';
      },
      (err) => {
        this.showStatusResult = true;
        this.typeResult = 'error';
      }
    );
  }

  resetForm() {
    this.register = this.setRegister();
    this.productForm.reset();
  }
}
