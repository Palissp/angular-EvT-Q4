import { Component, OnInit } from '@angular/core';
import {RegistrationFormInterface} from "../../data/interfaces/registrationForm.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  form: FormGroup;
  example:RegistrationFormInterface={
    name: "John",
    lastName: "Doe",
    email: "",
    phone: "",
    province: "",
    city: "",
    products: [],
    authorization: false,
    agree: false,
  };

  constructor(builder: FormBuilder) {
    this.form = builder.group({
      name: "",
    });
  }

  ngOnInit(): void {
  }

  submitNewRegistration(){
    console.log(this.example);
  }

}
