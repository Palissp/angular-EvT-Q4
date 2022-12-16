import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss'],
})
export class ResultComponent implements OnInit {
  @Input() type: 'error' | 'success' = 'error';
  constructor() {}

  ngOnInit(): void {}

  setText() {
    return this.type === 'error'
      ? 'Ocurrio un error con el formulario intente nuevamente'
      : 'Formulario enviado exitosamente';
  }
}
