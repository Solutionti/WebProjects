import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AdmisionesModule } from './admisiones/admisiones.module';
import { EcografiasModule } from './ecografias/ecografias.module';
import { ComponentesModule } from './componentes/componentes.module';
import { ProcedimientosModule } from './procedimientos/procedimientos.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { SeguridadModule } from './seguridad/seguridad.module';
import { ContabilidadModule } from './contabilidad/contabilidad.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdmisionesModule,
    EcografiasModule,
    ComponentesModule,
    ProcedimientosModule,
    InventariosModule,
    SeguridadModule,
    ContabilidadModule,
    BrowserAnimationsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
