import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './seguridad/iniciarsesion/iniciarsesion.component';
import { UsuariosComponent } from './seguridad/usuarios/usuarios.component';
import { InicioComponent } from './seguridad/inicio/inicio.component';
import { VentaComponent } from './ventas/venta/venta.component';
import { PedidosComponent } from './ventas/pedidos/pedidos.component';
import { ComprasComponent } from './ventas/compras/compras.component';
import { ProveedoresComponent } from './ventas/proveedores/proveedores.component';
import { InventarioComponent } from './inventarios/inventario/inventario.component';
import { ReporteComponent } from './reportes/reporte/reporte.component';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesionComponent,  
  },
  // SEGURIDAD
  {
    path: 'usuarios',
    component: UsuariosComponent,  
  },
  {
    path: 'inicio',
    component: InicioComponent,  
  },
  // INVENTARIOS
  {
    path: 'inventarios',
    component: InventarioComponent, 
  },
  // VENTAS
  {
    path: 'venta',
    component: VentaComponent, 
  },
  {
    path: 'pedidos',
    component: PedidosComponent, 
  },
  {
    path: 'compras',
    component: ComprasComponent, 
  },
  {
    path: 'proveedores',
    component: ProveedoresComponent, 
  },
  // REPORTES
  {
    path: 'reportes',
    component: ReporteComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
