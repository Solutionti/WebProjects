import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IniciarsesionComponent } from './seguridad/iniciarsesion/iniciarsesion.component';
import { UsuariosComponent } from './seguridad/usuarios/usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: IniciarsesionComponent,  
  },
  {
    path: 'usuarios',
    component: UsuariosComponent,  
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
