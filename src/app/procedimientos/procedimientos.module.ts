import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColposcopiaComponent } from './colposcopia/colposcopia.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { HistorialpacienteComponent } from './historialpaciente/historialpaciente.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ColposcopiaComponent,
    HistorialpacienteComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    ReactiveFormsModule
  ]
})
export class ProcedimientosModule { }
