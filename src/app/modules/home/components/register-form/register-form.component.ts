import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SelectItemI } from 'src/app/shared/components/select/models/select.model';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../../services/products/products.service';
import { ProvincesService } from '../../services/provinces/provinces.service';
import { CantonsService } from '../../services/cantons/cantons.service';
import { ProductCatalogI } from '../../models/product-catalog.model';
import { CustomerService } from '../../services/customer/customer.service';
import { CustomerCatalogI } from '../../models/customer-catalog.model';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {
  @Output() closeOutput = new EventEmitter<boolean>();
  title: string = 'Agregar Jugador';
  formCustomer: FormGroup;
  authorId: number = environment.authorId;
  positionList: SelectItemI[] = [];

  provinceList: SelectItemI[] = [];
  cantonList: SelectItemI[] = [];
  productList: ProductCatalogI[] = [];
  productListSelected: string[] = [];
  checkSelected: boolean[] = [false, false];
  isConditionAcepted: boolean = false;

  constructor(
    private fb: FormBuilder,
    private productsService: ProductsService,
    private ProvincesService: ProvincesService,
    private cantonsService: CantonsService,
    private customerService: CustomerService,
  ) {
    this.formCustomer = this.initForm();
  }

  ngOnInit(): void {
    console.log('Modal → ngOnInit');
    this.loadApiData();
  }

  ngOnDestroy(): void {
    console.log('Modal → ngOnDestroy');
  }



  close(ref?: any) {
    this.closeOutput.emit(ref);
    this.formCustomer.reset();
  }

  initForm() {
    return this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      productos: this.fb.array([], Validators.required),
      informacion: [false, Validators.required]
    });
  }

  get name() { return this.formCustomer.get('name') as FormControl; }
  get lastname() { return this.formCustomer.get('lastname') as FormControl; }
  get email() { return this.formCustomer.get('email') as FormControl; }
  get phone() { return this.formCustomer.get('phone') as FormControl; }
  get provincia() { return this.formCustomer.get('provincia') as FormControl; }
  get ciudad() { return this.formCustomer.get('ciudad') as FormControl; }
  get productos() { return this.formCustomer.get('productos') as FormArray; }
  get informacion() { return this.formCustomer.get('informacion') as FormControl; }

  loadApiData() {
    this.getProvinces();
    this.getProducts();
  }

  getCantosByCode(code: string) {
    this.cantonsService.getCantosByCode(code).subscribe(res => {
      console.log('Cantos', res);
      this.cantonList = res.map(_canton => {
        const { id, canton } = _canton;
        return { value: id, label: canton };
      });
    });
  }

  getProvinces() {
    this.ProvincesService.getProvinces().subscribe(res => {
      console.log('Provinces', res);
      this.provinceList = res.map(province => {
        const { codigo, provincia } = province;
        return { value: codigo, label: provincia };
      });
    });
  }

  getProducts() {
    this.productsService.getProducts().subscribe(res => {
      this.productList = res;
      console.log('Products', this.productList);
    });
  }

  selectProvince(provinceCode: string) {
    this.getCantosByCode(provinceCode);
  }

  selectProduct(product: any) {
    const productValue = product?.target?.value;
    const productChecked = product?.target?.checked;
    if (productChecked) {
      this.productListSelected.push(productValue);
    } else {
      const filteredProducts = this.productListSelected.filter((item) => item !== productValue);
      this.productListSelected = filteredProducts;
    }
    this.productos.clear();
    this.productListSelected.forEach(element => {
      this.productos.push(this.fb.control(element));
    });

    console.log('productListSelected:', this.productListSelected);
  }

  sendNotification(valueCheck: any, option: string) {
    console.log(valueCheck?.target?.value);
    if (option === 'no') {
      this.checkSelected[0] = true;
      this.checkSelected[1] = false;
      this.formCustomer.get('informacion')?.setValue(false);
      return;
    }
    if (option === 'si') {
      this.checkSelected[0] = false;
      this.checkSelected[1] = true;
      this.formCustomer.get('informacion')?.setValue(true);
    }
  }

  aceptConditions(acept: any) {
    const aceptChecked = acept?.target?.checked;
    this.isConditionAcepted = aceptChecked;
    console.log('isConditionAcepted:', this.isConditionAcepted);
  }


  validateForm() {
    console.log(this.formCustomer.value);
    if (this.formCustomer.valid) {
      if (this.isConditionAcepted) {
        this.postCustomer(this.formCustomer.value);
      } else {
        alert("Acepte términos y condiciones");
      }
    } else {
      alert("Ingrese toda la información o de click en el botón Load Data para cargar la información");
    }
  }


  postCustomer(data: CustomerCatalogI) {
    this.customerService.postCustomer(data).subscribe(res => {
      this.formCustomer.reset();
      alert("Datos guardados exitosamente.");
    });
  }

  resetForm(){
    this.formCustomer.reset();
    this.productos.clear();
  }



  cleanForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach((key) => {
      const value = typeof formGroup.get(key)?.value === 'string' ? formGroup.get(key)?.value.trim() : formGroup.get(key)?.value;
      formGroup.get(key)?.setValue(value);
    });
  }



}
