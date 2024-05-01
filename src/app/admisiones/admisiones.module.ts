import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PacientesComponent } from './pacientes/pacientes.component';
import { AdmisionComponent } from './admision/admision.component';
import { TriageComponent } from './triage/triage.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


@NgModule({
  declarations: [
    PacientesComponent,
    AdmisionComponent,
    TriageComponent,
    LaboratorioComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    
  ]
})
export class AdmisionesModule { }