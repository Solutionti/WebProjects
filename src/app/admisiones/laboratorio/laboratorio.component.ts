import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
})
export class LaboratorioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  laboratorioForm = new FormGroup({
    dni_laboratorio: new FormControl(''),
    nombre_laboratorio: new FormControl(''),
    doctor_laboratorio: new FormControl(''),
    fecha_laboratorio: new FormControl(''),
    Efectivo_laboratorio: new FormControl(''),
    tarjeta_laboratorio: new FormControl(''),
    observacion_laboratorio: new FormControl(''),
    total_laboratorio: new FormControl(''),
  });

}
