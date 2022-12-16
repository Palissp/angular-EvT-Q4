import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ParametersService } from 'src/app/modules/core/services/parameters.service';
import { ProductsService } from 'src/app/modules/core/services/products.service';
import { RegistryService } from 'src/app/modules/core/services/registry.service';
import { Product } from 'src/app/shared/interfaces/products.interface';
import { Canton, Province } from 'src/app/shared/interfaces/state.interface';

@Component({
  selector: 'app-registry-form',
  templateUrl: './registry-form.component.html',
  styleUrls: ['./registry-form.component.scss'],
})
export class RegistryFormComponent implements OnInit {
  provinceList: Province[] = [];
  productList: Product[] = [];
  catonList: Canton[] = [];

  errorLoadData: boolean = false;
  isCheckedTerms: boolean = false;

  frm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private paramService: ParametersService,
    private productService: ProductsService,
    private registryService: RegistryService
  ) {}

  ngOnInit(): void {
    this.startForm();
  }

  startForm() {
    this.errorLoadData = false;
    this.frm = this.fb.group({
      name: [
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ],
      ],
      lastname: [
        '',
        [
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.required,
        ],
      ],
      email: ['', [Validators.email, Validators.required]],
      phone: [
        '',
        [
          Validators.maxLength(10),
          Validators.minLength(10),
          Validators.required,
        ],
      ],
      provincia: ['', [Validators.required]],
      ciudad: ['', [Validators.required]],
      productos: ['', []],
      information: ['', [Validators.required]],
    });
    this.productService.getProductsList()?.subscribe(
      (data) => {
        this.productList = data;
      },
      () => (this.errorLoadData = true)
    );
    this.paramService.getProvinceList()?.subscribe(
      (data) => {
        this.provinceList = data;
      },
      () => (this.errorLoadData = true)
    );
  }

  parseProvinceToOption() {
    return this.provinceList.map((e) => {
      return { id: e.codigo, name: e.provincia };
    });
  }

  parseCantonToOption() {
    return this.catonList.map((e) => {
      return { id: e.id, name: e.canton };
    });
  }

  onSelectProvince(event: any) {
    this.frm.controls['provincia'].setValue(event);
    if (event) {
      this.paramService.getCantonList(event)?.subscribe(
        (data) => {
          this.catonList = data;
        },
        () => (this.errorLoadData = true)
      );
    }
  }

  onSelectCanton(event: any) {
    this.frm.controls['ciudad'].setValue(event);
  }

  onSaveClick() {
    this.registryService.postRegistry(this.frm.value);
  }

  onRestartClick() {
    console.log(this.frm.value);
    if (this.errorLoadData) {
      this.startForm();
    }
  }
}
