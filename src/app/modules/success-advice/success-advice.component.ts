import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-success-advice',
  templateUrl: './success-advice.component.html',
  styleUrls: ['./success-advice.component.scss']
})
export class SuccessAdviceComponent implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  retry() {
    this.router.navigate(['']);
  }
}
