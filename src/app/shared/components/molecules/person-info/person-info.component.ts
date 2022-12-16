import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PersonDataService } from 'src/app/core/services/person-data.service';

@Component({
  selector: 'app-person-info',
  templateUrl: './person-info.component.html',
  styleUrls: ['./person-info.component.scss']
})
export class PersonInfoComponent implements OnInit {

  form = new FormGroup({});
  listProducts: Array<any> = new Array<any>();

  constructor(private fb: FormBuilder, private personService: PersonDataService) { }

  ngOnInit(): void {
    this.initForm()
    this.getProducts()
  }

  initForm() {
    this.form = this.fb.group({
      "name": [null, [Validators.required]],
      "lastname": [null, [Validators.required]],
      "email": [null, [Validators.required]],
      "phone": [null, [Validators.required]],
      "provincia": [null, [Validators.required]],
      "ciudad": [null, [Validators.required]],
      "informacion": [null, [Validators.required]],
    });

  }

  getProducts(){
    this.personService.getProduct().subscribe(res=>{
      this.listProducts = res;
      const filter = this.listProducts.slice(1, 4);
      this.listProducts = filter;
    })
  }

  savePerson() {
    let person = this.form.value;
    this.personService.savePerson(person).subscribe(res => {
      console.log(res);
      alert('Send exitoso')
    })
  }

}
