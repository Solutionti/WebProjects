import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcografiaComponent } from './ecografia/ecografia.component';
import { ComponentesModule } from '../componentes/componentes.module';




@NgModule({
    declarations: [
        EcografiaComponent,
    ],
    imports: [
        CommonModule,
        ComponentesModule
    ]
})
export class EcografiasModule { }
