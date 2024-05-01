import { ColposcopiaComponent } from './procedimientos/colposcopia/colposcopia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './seguridad/iniciarsesion/iniciarsesion.component';
import { PacientesComponent } from './admisiones/pacientes/pacientes.component';
import { TriageComponent } from './admisiones/triage/triage.component';
import { AdmisionComponent } from './admisiones/admision/admision.component';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesionComponent,
  },
  {
    path: 'pacientes',
    component: PacientesComponent,
  },
  {
    path: 'triage',
    component: TriageComponent,
  },
  {
    path: 'admision',
    component: AdmisionComponent,
  },
  {
    path: 'colposcopia',
    component: ColposcopiaComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
