import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Province } from '../../config/province.interface';
import { Product } from '../../config/product.interface';
import { RegisterService } from '../../services/register.service';
import { City } from '../../config/city.interface';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  form!: FormGroup;
  products: Product[] = [];
  provinces: Province[] = [];
  cities: City[] = [];
  success = false;
  requestDone = false;

  constructor(private registerService: RegisterService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      lastname: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      phone: new FormControl(null, [Validators.required]),
      provincia: new FormControl(null, [Validators.required]),
      ciudad: new FormControl({ value: null, disabled: true }, [Validators.required]),
      productos: new FormArray([], [this.minLengthArray(2, 4)]),
      informacion: new FormControl(null, [Validators.required]),
      terms: new FormControl(null, [Validators.requiredTrue]),
    });

    this.registerService.getProducts().subscribe({
      next: (res) => this.products = res,
      error: (error) => alert('Hubo un error recuperando los productos, intente nuevamente')
    });

    this.registerService.getProvinces().subscribe({
      next: (res) => this.provinces = res,
      error: (error) => alert('Hubo un problema recuperando las provincias, intente nuevamente')
    });
  }

  onSelectProvince() {
    this.registerService.getCities(this.form.value.provincia).subscribe({
      next: (res) => {
        this.cities = res;
        this.form.controls['ciudad'].enable();
      },
      error: (error) => alert('Hubo un problema recuperando las ciudades, intente nuevamente')
    });
  }

  onSelectProduct(event: Event) {
    const formArray = this.form.get('productos') as FormArray;
    const input = event.target as HTMLInputElement;
    if (input.checked) {
      formArray.push(new FormControl(input.value));
    } else {
      let elementIndex = formArray.controls.findIndex(control => control.value === input.value);
      formArray.removeAt(elementIndex);
    }
  }

  onSend() {
    if(this.form.invalid)
      return;
    this.form.disable();
    this.registerService.register(this.form.value).subscribe({
      next: (res) => {
        this.requestDone = true;
        this.success = true;
      },
      error: (error) => {
        this.requestDone = true;
        this.success = false;
      }
    });
  }

  onReset() {
    this.form.reset();
    this.requestDone = false;
  }

  minLengthArray(min: number, max: number) {
    return (c: AbstractControl): { [key: string]: any } | null => {
      if (c.value.length >= min && c.value.length <= max)
        return null;

      return { 'minLengthArray': { valid: false } };
    }
  }
}
