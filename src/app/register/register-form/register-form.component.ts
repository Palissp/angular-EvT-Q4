import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.scss']
})
export class RegisterFormComponent implements OnInit {

  public registerForm: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
  ) {
    this.registerForm = this.formbuilder.group({
      name: ['', [Validators.required, Validators.min(4), Validators.max(40)],],
      surname: ['', [Validators.required, Validators.min(4), Validators.max(40)],],
      email: ['', [Validators.email]],
      telephone: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      information: ['', [Validators.required]],
      terms: ['', [Validators.required]],
      save: ['false'],
    });
  }

  ngOnInit(): void {
  }

}
