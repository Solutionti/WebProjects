import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';



@NgModule({
  declarations: [
    MenuComponent,
    CerrarsesionComponent
  ],
  exports: [
    MenuComponent,
    CerrarsesionComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class ComponentesModule { }
