import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KardexComponent } from './kardex/kardex.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { InventarioComponent } from './inventario/inventario.component';



@NgModule({
  declarations: [
    KardexComponent,
    InventarioComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class InventariosModule { }
