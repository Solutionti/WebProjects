import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexComponent } from './kardex/kardex.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { InventarioComponent } from './inventario/inventario.component';
import { ProductosComponent } from './productos/productos.component';



@NgModule({
  declarations: [
    KardexComponent,
    InventarioComponent,
    ProductosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class InventariosModule { }
