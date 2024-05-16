import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EcografiaComponent } from './ecografia/ecografia.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { ReactiveFormsModule } from '@angular/forms';




@NgModule({
    declarations: [
        EcografiaComponent,
    ],
    imports: [
        CommonModule,
        ComponentesModule,
        ReactiveFormsModule
    ]
})
export class EcografiasModule { }
