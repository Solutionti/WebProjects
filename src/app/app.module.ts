import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SeguridadModule } from './seguridad/seguridad.module';
import { InventariosModule } from './inventarios/inventarios.module';
import { ReportesModule } from './reportes/reportes.module';
import { VentasModule } from './ventas/ventas.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    InventariosModule,
    ReportesModule,
    SeguridadModule,
    VentasModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
