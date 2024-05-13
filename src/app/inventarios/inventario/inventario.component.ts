import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html'
})
export class InventarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inventarioForm = new FormGroup({

    empresa_inventario: new FormControl(''),
    stock_inventario: new FormControl(''),
    cant_inventario: new FormControl(''),
    codigo_inventario: new FormControl(''),
    inicial_inventario: new FormControl(''),
    final_inventario: new FormControl(''),
  })

}
