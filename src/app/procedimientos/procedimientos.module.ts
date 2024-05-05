import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColposcopiaComponent } from './colposcopia/colposcopia.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    ColposcopiaComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class ProcedimientosModule { }
