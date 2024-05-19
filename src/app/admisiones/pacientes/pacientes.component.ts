import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListasService } from 'src/app/services/listas.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',

})
export class PacientesComponent implements OnInit {

  constructor(
    private listasaplicacion: ListasService
  ) { }

  ngOnInit(): void {
    this.getSex();
  }

  getSex() {
    this.listasaplicacion
        .getSex()
        .then((response) => {
          console.log(response);
        })
  }

  containerResponsable = true;
  btnActualizarHidden = true;
  btnHistoriaHidden = false;
  btnAgregarHidden = false;

  crearPacienteForm = new FormGroup({
    crearpaciente_dni: new FormControl(''),
    crearpaciente_apellido: new FormControl(''),
    crearpaciente_nombre: new FormControl(''),
    crearpaciente_hc: new FormControl(''),
    crearpaciente_celular: new FormControl(''),
    crearpaciente_sexo: new FormControl(''),
    crearpaciente_fechanacimiento: new FormControl(''),
    crearpaciente_edad: new FormControl(''),
    crearpaciente_direccion: new FormControl(''),
    crearpaciente_departamento: new FormControl(''),
    crearpaciente_provincia: new FormControl(''),
    crearpaciente_distrito: new FormControl(''),
    crearpaciente_ocupacion: new FormControl(''),
    crearpaciente_grado: new FormControl(''),
    crearpaciente_estacocivil: new FormControl(''),
    crearpaciente_esmenor: new FormControl(''),
    crearpaciente_documentores: new FormControl(''),
    crearpaciente_responsable: new FormControl(''),
    crearpaciente_telefonores: new FormControl(''),
    crearpaciente_parentescores: new FormControl('')
  });

  esmenorEdad(){
    let container: any  = this.crearPacienteForm.get("crearpaciente_esmenor")?.value;
    if(container == true) {
      this.containerResponsable = false;
    }
    else {
      this.containerResponsable = true;
    }
  }


}
