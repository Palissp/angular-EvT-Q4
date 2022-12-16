import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { filter, Observable, Subject, takeUntil } from 'rxjs';
import { ReadCityModel } from 'src/app/models/read-city.model';
import { ReadProductModel } from 'src/app/models/read-product.model';
import { ReadProvinceModel } from 'src/app/models/read-province.model';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit, OnDestroy {
  private stop$ = new Subject<void>();
  regsterForm!: FormGroup;
  province$!: Observable<ReadProvinceModel[]>;
  cities$!: Observable<ReadCityModel[]>;
  products$!: Observable<ReadProductModel[]>;

  constructor(
    private readonly fb: FormBuilder,
    private readonly _registerService: RegisterService
  ) {}
  ngOnDestroy(): void {
    this.stop();
  }

  ngOnInit(): void {
    this.initForm();
    this.initServices();
    this.checkSelect();
  }
  private initServices() {
    this.province$ = this._registerService.getAllProvinces();
    this.products$ = this.getProducts();
  }
  private getProducts(): Observable<ReadProductModel[]> {
    return this._registerService.getAllProducts();
  }
  procesaPropagar(codigo: any) {
    console.log(codigo, 'hola');
  }
  procesaPropagarQuestion(codigo: any) {
    console.log(codigo, 'Question');
  }
  private checkSelect() {
    this.regsterForm
      .get('provincia')
      ?.valueChanges.pipe(
        takeUntil(this.stop$),
        filter((data) => typeof data === 'string')
      )
      .subscribe((data) => {
        this.cities$ = this._registerService.getAllCities(data);
      });
  }

  private initForm(): void {
    this.regsterForm = this.fb.group({
      name: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      provincia: ['', Validators.required],
      ciudad: ['', Validators.required],
      productos: [],
      informacion: [false],
      informacion2: [false],
    });
  }
  save() {}

  recargar() {
    this.products$ = this.getProducts();
  }

  getControl(control: string): FormControl {
    return this.regsterForm.get(control) as FormControl;
  }

  esInvalido(input: FormControl): boolean {
    return (input.touched || input.dirty) && input.invalid;
  }
  esValido(input: FormControl): boolean {
    return (input.touched || input.dirty) && input.valid;
  }
  esRequerido(input: FormControl): boolean {
    let bool: boolean = false;
    if (input.touched || input.dirty) {
      bool = input.hasError('required');
    }
    return bool;
  }
  private stop(): void {
    this.stop$.next();
    this.stop$.complete();
  }
}
