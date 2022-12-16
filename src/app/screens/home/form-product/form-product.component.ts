import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemSelect } from 'src/app/shared/models/item-select.model';
import { LocationService } from '../../../core/services/location.service';
import { ProductService } from '../../../core/services/product.service';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.scss'],
})
export class FormProductComponent implements OnInit {
  options = [
    { name: 'Opcion 1', checked: false },
    { name: 'Opcion 2', checked: false },
    { name: 'Opcion 3', checked: false },
  ];

  public frmProduct!: FormGroup;

  provinces: ItemSelect[] = [];
  cantons: ItemSelect[] = [];
  products: ItemSelect[] = [];

  constructor(
    private productService: ProductService,
    private locationService: LocationService,
    private readonly fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.locationService.getProvinces().subscribe(
      (provincesResponse) => {
        provincesResponse.forEach((item) => {
          this.provinces.push({ id: item.codigo, description: item.provincia });
        });
      },
      (error) => {
        this.provinces = [];
        console.log('Error al cargar provincias: ', error);
      }
    );

    this.productService.getProducts().subscribe(
      (productsResponse) => {
        productsResponse.forEach((item) => {
          this.products.push({ id: item.id, description: item.name });
        });
      },
      (error) => {
        this.products = [];
        console.log('Error al cargar productos: ', error);
      }
    );

    this.frmProduct = this.fb.group({
      firstname: [
        null,
        [
          Validators.minLength(4),
          Validators.maxLength(40),
          Validators.required,
        ],
      ],
      lastname: [
        null,
        [
          Validators.minLength(4),
          Validators.maxLength(40),
          Validators.required,
        ],
      ],
      email: [
        null,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
      phonenumber: [null, Validators.pattern('^((\\+593-?)|0)?[0-9]{10}$')],
      province: [null, Validators.required],
      canton: [null, Validators.required],
      productHire: [
        null,
        [Validators.minLength(2), Validators.maxLength(4), Validators.required],
      ],
      infoAdditional: [null, [Validators.required]],
      terms: [null, Validators.required],
    });
  }

  getCantons(event: any) {
    console.log('optionSelect: ', event);
    this.locationService.getCantonByIdProvince(event).subscribe(
      (resp) => {
        resp.forEach((item) => {
          this.cantons.push({ id: item.codigo, description: item.canton });
        });
      },
      (error) => {
        console.log(error);
        this.cantons = [];
      }
    );
  }

  onClickButton(event: string) {
    if (event === 'Enviar') {
      this.sendForm();
    } else {
      this.resetForm();
    }
  }

  sendForm() {
    const formData = this.frmProduct.value;
    this.productService.saveProducts(formData).subscribe();
  }

  resetForm() {
    this.frmProduct.reset();
  }
}
