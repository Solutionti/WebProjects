import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexComponent } from './kardex/kardex.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductosComponent } from './productos/productos.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    KardexComponent,
    InventarioComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    ReactiveFormsModule,
    
  ]
})
export class InventariosModule { }
