import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';



@NgModule({
  declarations: [
    IniciarsesionComponent,
    UsuariosComponent,
    InicioComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class SeguridadModule { }
