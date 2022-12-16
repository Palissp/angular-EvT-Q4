import {Component, OnInit} from '@angular/core';
import {RegistrationFormInterface} from "../../data/interfaces/registrationForm.interface";
import {FormBuilder, FormGroup} from "@angular/forms";

import {Router} from "@angular/router";
import {RegistrationService} from "../../services/registration.service";

@Component({
    selector: 'app-main-form',
    templateUrl: './main-form.component.html',
    styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
    form: FormGroup;
    estadoProvincias: any=[];
    agree = false;
    example: RegistrationFormInterface = {
        name: "John",
        lastName: "Doe",
        email: "",
        phone: "",
        provincia: "",
        ciudad: "",
        productos: [],
        informacion: false,
    };

    constructor(
        private router: Router,
        private registrationService: RegistrationService,
        builder: FormBuilder,
        ) {
        this.form = builder.group({
            name: "",  lastName: "Doe",
            email: "",
            phone: "",
            provincia: "",
            ciudad: "",
            productos: [],
            informacion: false,
        });
    }

    ngOnInit(): void {
        this.registrationService.getEstados().subscribe((data) => {
            console.log(data);
            this.estadoProvincias = data;
        });
    }

    submitNewRegistration() {
        console.log(this.example);
        this.router.navigate(['success']);
    }

    retry() {
        this.router.navigate(['']);
    }

}
