import { FormControl, FormGroup } from '@angular/forms';
import { ComponentesModule } from './../../componentes/componentes.module';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})

export class ProductosComponent implements OnInit {

  constructor() { } //console

  ngOnInit(): void {
    // visual docuemnto, dom
  }

  productosForm = new FormGroup ({

    categoria_productos: new FormControl(''),
    nombre_productos: new FormControl(''),
    codigo_productos: new FormControl(''),
    barras_productos: new FormControl(''),
    medida_productos: new FormControl(''),
    cantidad_productos: new FormControl(''),
    precio_productos: new FormControl(''),
    moneda_productos: new FormControl(''),
    descripcion_productos: new FormControl('')



  });

  hiddenBtn = true;


  verArray(): void { //crear una funcion
    console.log(this.producto);
  }

  producto: any[] = [ //crear un array de objetos
    {
      codigo: 'televisor',
      nombre: 'grande',
      categoria: '123456789',
      historial: '58',
      valor: 'sexual',
      cantidad: 'historial',
      stock: '3',
    },

    {
      codigo: 'ct1200',
      nombre:'lg',
      categoria: 'negro',
      historial: '101',
      valor: 'infantil',
      cantidad: 'manual',
      stock: '2',
    },

    {
      codigo: '1tb',
      nombre: 'led',
      categoria: '4K',
      historial: '133',
      valor: 'adultos',
      cantidad: 'automatico',
      stock: '1',
    }
  ];




}
