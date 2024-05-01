import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-triage',
  templateUrl: './triage.component.html',
})
export class TriageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  triageForm = new FormGroup({
    dni_triage: new FormControl(''),
    paciente_triage: new FormControl(''),
    edad_triage: new FormControl(''),
    doctor_triage: new FormControl(''),
    especialidad_triage: new FormControl(''),
    presion_triage: new FormControl(''),
    temperatura_triage: new FormControl(''),
    frecuenciar_triage: new FormControl(''),
    frecuenciac_triage: new FormControl(''),
    saturacion_triage: new FormControl(''),
    peso_triage: new FormControl(''),
    talla_triage: new FormControl(''),
    imc_triage: new FormControl(''),
  });

  dni_triage = "";
  paciente_triage = "";
  edad_triage = "";
  doctor_triage = "";
  especialidad_triage = "";
  presion_triage = "";
  temperatura_triage = "";
  frecuenciar_triage = "";
  frecuenciac_triage = "";
  saturacion_triage = "";
  peso_triage = "";
  talla_triage = "";
  imc_triage = "";

  vervalor(): void {
    alert(this.triageForm.get("dni_triage")?.value);
  }




}
