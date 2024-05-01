import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdmisionesModule } from './admisiones/admisiones.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdmisionesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
