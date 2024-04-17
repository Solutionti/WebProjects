import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AdmisionComponent } from './admision/admision.component';
import { TriageComponent } from './triage/triage.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';



@NgModule({
  declarations: [
    PacientesComponent,
    AdmisionComponent,
    TriageComponent,
    LaboratorioComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdmisionesModule { }
