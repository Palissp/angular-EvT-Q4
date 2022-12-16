import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ERROR } from '../../constants/error.type';
import { ISelectItem } from '../../interfaces/select.interface';
import { ProductService } from '../../services/product.service';
import { StateService } from '../../services/state.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss'],
})
export class RegisterFormComponent implements OnInit {
  @Input() data: any;
  @Output() sendModalResponse: EventEmitter<any> = new EventEmitter();
  labels = ERROR;
  form: FormGroup;
  disabled: boolean = true;
  stateList: ISelectItem[] = [];
  list: any = [];
  items: any = [];
  cityList: ISelectItem[] = [];
  showInterface: boolean = true;

  constructor(
    private _formBuilder: FormBuilder,
    private _productService: ProductService,
    private _stateService: StateService
  ) {}

  ngOnInit(): void {
    this.setForm();

    if (this.data !== undefined) {
      this.form.patchValue({ ...this.data });
    }

    this.getState();
    this.getProducts();
    this.getCity();
  }

  setForm() {
    this.form = this._formBuilder.group({
      id: null,
      name: [null, Validators.required],
      surname: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      phone: [null, [Validators.required, Validators.maxLength(10)]],
      idCity: ['', Validators.required],
      idState: ['', Validators.required],
      terms: [null, Validators.required],
      'tarjeta-de-credito': [''],
    });
  }

  get name() {
    return this.form.get('name') as FormControl;
  }
  get surnames() {
    return this.form.get('surnames') as FormControl;
  }
  get phone() {
    return this.form.get('phone') as FormControl;
  }
  get email() {
    return this.form.get('email') as FormControl;
  }
  get city() {
    return this.form.get('idCity') as FormControl;
  }
  get state() {
    return this.form.get('idState') as FormControl;
  }

  async getState() {
    (await this._stateService.getState()).subscribe(
      (res) => {
        this.list = res;
        this.list.forEach((element: any) => {
          let data = {
            value: element.codigo,
            label: element.provincia,
            selected: false,
          };
          this.stateList.push(data);
        });
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async getCity() {
    await (
      await this._stateService.getStateById('BOL')
    ).subscribe(
      (res) => {
        this.list = res;
        this.list.forEach((element: any) => {
          let data = {
            value: element.id,
            label: element.canton,
            selected: false,
          };
          this.cityList.push(data);
        });
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  async getProducts() {
    (await this._productService.getProducts()).subscribe(
      (res) => {
        this.items = res;
        console.log(res);
      },
      (error) => {
        this.showInterface = false;
        console.log(error);
      }
    );
  }

  submit() {
    console.log('submit');
    if (this.data !== undefined) {
    } else {
    }
  }

  async cancel() {
    this.resetForm();
  }

  resetForm(){
    this.form.reset();
  }
}
