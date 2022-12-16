import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-finish-form',
  templateUrl: './finish-form.component.html',
  styleUrls: ['./finish-form.component.scss'],
})
export class FinishFormComponent implements OnInit {
  @Input() isSuccess?: boolean = true;
  successImageUrl: string = '../../../../../assets/success-img.png';
  errorImageUrl: string = '../../../../../assets/error-img.png';
  successIconUrl: string = '../../../../../assets/success-logo.png';
  errorIconUrl: string = '../../../../../assets/error-logo.png';
  @Input() successText: string = 'Formulario enviado exitosamente';
  @Input() errorText: string =
    'Ocurrio un error con el formulario intente nuevamente';

  constructor() {}

  ngOnInit(): void {}
}
