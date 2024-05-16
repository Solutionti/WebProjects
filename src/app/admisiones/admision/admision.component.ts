import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
})
export class AdmisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  date = new Date();
  fechaActual = String(this.date.getFullYear() + '-' +
    String(this.date.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.date.getDate()).padStart(2, '0')
  );

  admisionForm = new FormGroup({

    dni_admision: new FormControl(''),
    hc_admision: new FormControl(''),
    si_admision: new FormControl(''),
    no_admision: new FormControl(''),
    nombre_admision: new FormControl(''),
    especialidad_admision: new FormControl(''),
    doctor_admision: new FormControl(''),
    fecha_admision: new FormControl(''),
    factura_admision: new FormControl(''),
    costo_admision: new FormControl(''),
    descuento_admision: new FormControl(''),
    comision_admision: new FormControl(''),
    recibida_admision: new FormControl(''),
    devolver_admision: new FormControl(''),
    efectivo_admision: new FormControl(''),
    tarjeta_admision: new FormControl(''),
    total_admision: new FormControl('')
  });

}
