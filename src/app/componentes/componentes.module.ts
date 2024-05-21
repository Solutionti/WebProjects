import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';
import { CerrarsesionComponent } from './cerrarsesion/cerrarsesion.component';
import { LoaderComponent } from './loader/loader.component';



@NgModule({
  declarations: [
    MenuComponent,
    CerrarsesionComponent,
    LoaderComponent
  ],
  exports: [
    MenuComponent,
    CerrarsesionComponent,
    LoaderComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class ComponentesModule { }
