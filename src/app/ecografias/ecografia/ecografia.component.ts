import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-ecografia',
  templateUrl: './ecografia.component.html'
})

export class EcografiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ecografiaForm = new FormGroup({

    dni_ecografia: new FormControl(''),
    nombre_ecografia: new FormControl(''),
    tipo_ecografia: new FormControl(''),
    fecha_ecografia: new FormControl(''),
    observacion_ecografia: new FormControl(''),
  });

}
