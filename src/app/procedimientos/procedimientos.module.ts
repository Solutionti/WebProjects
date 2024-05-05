import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColposcopiaComponent } from './colposcopia/colposcopia.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { HistorialpacienteComponent } from './historialpaciente/historialpaciente.component';



@NgModule({
  declarations: [
    ColposcopiaComponent,
    HistorialpacienteComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class ProcedimientosModule { }
