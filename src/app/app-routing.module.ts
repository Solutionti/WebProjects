import { ColposcopiaComponent } from './procedimientos/colposcopia/colposcopia.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './seguridad/iniciarsesion/iniciarsesion.component';
import { PacientesComponent } from './admisiones/pacientes/pacientes.component';
import { TriageComponent } from './admisiones/triage/triage.component';
import { AdmisionComponent } from './admisiones/admision/admision.component';
import { LaboratorioComponent } from './admisiones/laboratorio/laboratorio.component';
import { EcografiaComponent } from './ecografias/ecografia/ecografia.component';
import { KardexComponent } from './inventarios/kardex/kardex.component';
import { InventarioComponent } from './inventarios/inventario/inventario.component';
import { UsuariosComponent } from './seguridad/usuarios/usuarios.component';
import { HistorialpacienteComponent } from './procedimientos/historialpaciente/historialpaciente.component';

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
    path: 'laboratorio',
    component: LaboratorioComponent,
  },
  {
    path: 'colposcopia',
    component: ColposcopiaComponent,
  },
  {
    path: 'ecografias',
    component: EcografiaComponent,
  },
  {
    path: 'inventario',
    component: InventarioComponent,
  },
  {
    path: 'kardex',
    component: KardexComponent,
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,
  },
  {
    path: 'hc',
    component: HistorialpacienteComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
