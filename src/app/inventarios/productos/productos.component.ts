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
    barras_prouctos: new FormControl(''),
    medida_productos: new FormControl(''),
    cantidad_productos: new FormControl(''),
    precio_productos: new FormControl(''),
    moneda_productos: new FormControl(''),
    descripcion_productos: new FormControl('')



  });
  categoria_productos = "";
  nombre_productos = "";
  codigo_productos = "";
  barras_prouctos = "";
  medida_productos = "";
  cantidad_productos = "";
  precio_productos = "";
  moneda_productos = "";
  descripcion_productos = "";



  hiddenBtn = true;




  mostrarVentana(): void {
  this.hiddenBtn = true;
   alert("hola mundo");
  }


}
