import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';



@NgModule({
  declarations: [
    IniciarsesionComponent,
    UsuariosComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeguridadModule { }
