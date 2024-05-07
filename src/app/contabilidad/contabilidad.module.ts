import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagosComponent } from './pagos/pagos.component';
import { GastosComponent } from './gastos/gastos.component';
import { FinanzasComponent } from './finanzas/finanzas.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    PagosComponent,
    GastosComponent,
    FinanzasComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class ContabilidadModule { }
