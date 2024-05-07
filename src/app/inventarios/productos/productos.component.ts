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

  hiddenBtn = true;


  mostrarVentana(): void {
  this.hiddenBtn = true;
   alert("hola mundo");
  }


}
