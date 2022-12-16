import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subject, takeUntil } from 'rxjs';
import {
  Product,
  RegistrationSubmitBody,
  SelectOption,
} from '../../interfaces';
import { CatalogsService, RegisterService } from '../../services';

@Component({
  selector: 'app-form-view',
  templateUrl: './form-view.component.html',
  styleUrls: ['./form-view.component.scss'],
})
export class FormViewComponent implements OnInit, OnDestroy {
  registerForm!: FormGroup;

  provincesOptions: SelectOption[] = [];
  citiesOptions: SelectOption[] = [];
  isLoading: boolean = false;

  formStatus: 'filling' | 'error' | 'success' = 'filling';

  private _onDestroy$ = new Subject<void>();

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _catalogService: CatalogsService,
    private readonly _registerService: RegisterService
  ) {
    this.initializeForm();
  }

  initializeForm() {
    this.registerForm = this._formBuilder.group({
      name: [
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
      phone: ['', [Validators.required, Validators.pattern('^[0-9]*$')]],
      province: ['', [Validators.required]],
      city: ['', [Validators.required]],
      products: this._formBuilder.array([]),
      information: ['', [Validators.required]],
      terms: [false, [Validators.required]],
    });
  }

  ngOnInit(): void {
    this.getProvinces();
    this.getProducts();
    this.onProvinceChange();
  }

  getProvinces() {
    this._catalogService.getProvinces().subscribe((data) => {
      this.provincesOptions = [
        ...data.map((province) => ({
          label: province.provincia,
          value: province.codigo,
        })),
      ];
    });
  }

  getProducts() {
    this._catalogService.getProducts().subscribe((data) => {
      data.forEach((product) => {
        this.productsOptions.push(this.generateProductControl(product));
      });
    });
  }

  generateProductControl(product: Product) {
    return this._formBuilder.group({
      label: [product.name],
      id: [product.id],
      selected: [false],
    });
  }

  onProvinceChange() {
    this.registerForm
      .get('province')!
      .valueChanges.pipe(takeUntil(this._onDestroy$))
      .subscribe((provinceCode) => {
        this.getCitiesByProvinceCode(provinceCode);
      });
  }

  getCitiesByProvinceCode(provinceCode: string) {
    this._catalogService
      .getCitiesByProvinceCode(provinceCode)
      .subscribe((data) => {
        this.citiesOptions = [
          ...data.map((city) => ({
            label: city.canton,
            value: city.id,
          })),
        ];
      });
  }

  submitForm() {
    this.isLoading = true;
    const formValue = this.registerForm.value;

    let selectedProducts: string[] = [];

    for (let i = 0; i < this.productsOptions.length; i++) {
      const productOption = this.productsOptions.at(i);
      if (productOption.value.selected) {
        selectedProducts.push(productOption.value.id);
      }
    }

    const body: RegistrationSubmitBody = {
      ciudad: formValue.city,
      email: formValue.email,
      informacion: formValue.information === 'Sí',
      lastname: formValue.lastname,
      name: formValue.name,
      phone: formValue.phone,
      productos: selectedProducts,
      provincia: formValue.province,
    };

    this._registerService.submitRegistration(body).subscribe(
      (res) => {
        this.formStatus = 'success';
        this.isLoading = false;
      },
      (error) => {
        this.formStatus = 'error';
        this.isLoading = false;
      }
    );
  }

  resetForm() {
    this.formStatus = 'filling';

    this.registerForm.get('name')!.reset();
    this.registerForm.get('lastname')!.reset();
    this.registerForm.get('phone')!.reset();
    this.registerForm.get('province')!.reset();
    this.registerForm.get('email')!.reset();
    this.registerForm.get('city')!.reset();
    this.registerForm.get('information')!.reset();
    this.registerForm.get('terms')!.reset();

    for (let i = 0; i < this.productsOptions.length; i++) {
      const productOption = this.productsOptions.at(i);
      productOption.get('selected')!.setValue(false);
    }
  }

  getSingleProductControl(group: AbstractControl, name: string): FormControl {
    return group.get(name) as FormControl;
  }

  get productsOptions() {
    return this.registerForm.get('products')! as FormArray;
  }

  get isSubmitButtonDisabled(): boolean {
    return (
      this.registerForm.invalid ||
      this.isLoading ||
      this.formStatus !== 'filling' ||
      !this.registerForm.get('terms')!.value ||
      !this.areProductsValid
    );
  }

  get isResetButtonDisabled(): boolean {
    return this.isLoading;
  }

  get areProductsValid(): boolean {
    let counter: number = 0;

    for (let i = 0; i < this.productsOptions.length; i++) {
      const productOption = this.productsOptions.at(i);
      if (productOption.value.selected) {
        counter++;
      }
    }

    return counter >= 2 && counter <= 4;
  }

  ngOnDestroy(): void {
    this.removeListeners();
  }

  removeListeners() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
