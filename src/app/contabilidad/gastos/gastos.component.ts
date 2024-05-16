import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gastos',
  templateUrl: './gastos.component.html',
})
export class GastosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  gastosForm = new FormGroup({

    empresa_gastos: new FormControl(''),
    stock_gastos: new FormControl(''),
    cant_gastos: new FormControl(''),
    codigo_gastos: new FormControl(''),
    inicial_gastos: new FormControl(''),
    final_gastos: new FormControl(''),
  });

}
