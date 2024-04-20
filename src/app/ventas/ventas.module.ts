import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProveedoresComponent } from './proveedores/proveedores.component';
import { ComprasComponent } from './compras/compras.component';
import { VentaComponent } from './venta/venta.component';
import { PedidosComponent } from './pedidos/pedidos.component';



@NgModule({
  declarations: [
    ProveedoresComponent,
    ComprasComponent,
    VentaComponent,
    PedidosComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class VentasModule { }
