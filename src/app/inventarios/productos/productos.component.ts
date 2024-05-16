import { FormControl, FormGroup } from '@angular/forms';
import { ComponentesModule } from './../../componentes/componentes.module';
import { Component, OnInit } from '@angular/core';
import { InventariosService } from '../services/inventarios.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
})

export class ProductosComponent implements OnInit {

  constructor(
    private inventarios: InventariosService
  ) { } //console

  ngOnInit(): void {
    // visual docuemnto, dom
    this.verUsurios();
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

  producto: any[] = [];

  // COMO HACER UNA PETICION  A UNA BASE DE DATOS API PHP CON AXIOS  
  // https://axios-http.com/,
  // https://axios-http.com/

  verUsurios() {
    this.inventarios
        .verUsuario()
        .then((response) =>{
          this.producto = response.data;
        })
        .catch(function(error) {
          console.log(error);
        });
  }


}
