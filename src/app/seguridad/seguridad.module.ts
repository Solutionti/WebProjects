import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IniciarsesionComponent } from './iniciarsesion/iniciarsesion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { InicioComponent } from './inicio/inicio.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    IniciarsesionComponent,
    UsuariosComponent,
    InicioComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule,
    ReactiveFormsModule
  ]
})
export class SeguridadModule { }
