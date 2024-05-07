import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComponentesModule } from '../componentes/componentes.module';



@NgModule({
  declarations: [
    IniciarsesionComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ]
})
export class SeguridadModule { }
