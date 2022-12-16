import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
    selector: 'app-error-advice',
    templateUrl: './error-advice.component.html',
    styleUrls: ['./error-advice.component.scss']
})
export class ErrorAdviceComponent implements OnInit {
    constructor(private router: Router,) {
    }

    ngOnInit(): void {
    }

    retry() {
        this.router.navigate(['']);
    }

}
