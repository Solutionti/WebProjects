import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ListasService } from 'src/app/services/listas.service';
import { AdmisionesService } from '../services/admisiones.service';

@Component({
  selector: 'app-pacientes',
  templateUrl: './pacientes.component.html',

})
export class PacientesComponent implements OnInit {

  constructor(
    private listasaplicacion: ListasService,
    private admisiones: AdmisionesService
  ) { }

  ngOnInit(): void {
    this.getSex();
    this.getDepartaments();
    this.getAcademics();
    this.getCivilStatus();
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
    crearpaciente_estadocivil: new FormControl(''),
    crearpaciente_esmenor: new FormControl(''),
    crearpaciente_documentores: new FormControl(''),
    crearpaciente_responsable: new FormControl(''),
    crearpaciente_telefonores: new FormControl(''),
    crearpaciente_parentescores: new FormControl('')
  });


  getSexs: any[] = [];
  getSex() {
    this.listasaplicacion
        .getSex()
        .then((response) => {
          this.getSexs = response.data;
        })
  }

  getDepartament: any[] = [];
  getDepartaments(){
      this.listasaplicacion
          .getDepartaments()
          .then((response) => {
            this.getDepartament = response.data;
        })
  }

  getAcademic: any[] = [];
  getAcademics(){
      this.listasaplicacion
          .getAcademics()
          .then((response) => {
            this.getAcademic = response.data;
      })
  }

  getCivilStatu: any[] = [];
  getCivilStatus() {
      this.listasaplicacion
          .getCivilStatus()
          .then((response) => {
            this.getCivilStatu = response.data
      })

  }

  getProvinces: any[] = [];
  getProvince() {
    let departamento = this.crearPacienteForm.get("crearpaciente_departamento")?.value; //se recupera valor input
    this.listasaplicacion
        .getProvince(departamento)
        .then((response) => {
          this.getProvinces = response.data
        })
  }

  getDistricto: any[] = [];
  getDistrict(){
    let provincia = this.crearPacienteForm.get("crearpaciente_departamento")?.value; // se recupera valor input
    this.listasaplicacion
        .getDistrict(provincia)
        .then((response) => {
          this.getDistricto = response.data
        })
  }


  esmenorEdad(){
    let container: any  = this.crearPacienteForm.get("crearpaciente_esmenor")?.value;
    if(container == true) {
      this.containerResponsable = false;
    }
    else {
      this.containerResponsable = true;
    }
  }

  getPatient(): void {
    let documento = this.crearPacienteForm.get("crearpaciente_dni")?.value;
    this.admisiones
        .getPatient(documento)
        .then((response: any ) => {
          this.crearPacienteForm.patchValue(
           {
            crearpaciente_apellido: response.data.apellido ,
            crearpaciente_nombre: response.data.nombre,
            crearpaciente_hc: response.data.hc,
            crearpaciente_celular: response.data.telefono,
            crearpaciente_sexo: response.data.sexo,
            crearpaciente_fechanacimiento: response.data.fecha_nacimiento,
            crearpaciente_edad: response.data.edad,
            crearpaciente_direccion: response.data.direccion,
            crearpaciente_departamento: response.data.departamento,
            crearpaciente_provincia: response.data.provincia,
            crearpaciente_distrito: response.data.distrito,
            crearpaciente_ocupacion: response.data.ocupacion,
            crearpaciente_grado: response.data.grado_academico,
            crearpaciente_estadocivil: response.data.estado_civil,
            crearpaciente_esmenor: response.data.menor_edad,
            crearpaciente_documentores: response.data.documento,
            crearpaciente_telefonores: response.data.telefono,
           }
          );
        });
  }

  crearPaciente(): void {
    let dni = this.crearPacienteForm.get("crearpaciente_dni")?.value,
        apellido = this.crearPacienteForm.get("crearpaciente_apellido")?.value,
        nombre = this.crearPacienteForm.get("crearpaciente_nombre")?.value,
        hc = this.crearPacienteForm.get("crearpaciente_hc")?.value,
        celular = this.crearPacienteForm.get("crearpaciente_celular")?.value,
        sexo = this.crearPacienteForm.get("crearpaciente_sexo")?.value,
        fechaNacimiento = this.crearPacienteForm.get("crearpaciente_fechanacimiento")?.value,
        edad = this.crearPacienteForm.get("crearpaciente_edad")?.value,
        direccion = this.crearPacienteForm.get("crearpaciente_direccion")?.value,
        departamento = this.crearPacienteForm.get("crearpaciente_departamento")?.value,
        provincia = this.crearPacienteForm.get("crearpaciente_provincia")?.value,
        distrito = this.crearPacienteForm.get("crearpaciente_distrito")?.value,
        ocupacion = this.crearPacienteForm.get("crearpaciente_ocupacion")?.value,
        grado = this.crearPacienteForm.get("crearpaciente_grado")?.value,
        estadoCivil = this.crearPacienteForm.get("crearpaciente_estadocivil")?.value,
        esMenor = this.crearPacienteForm.get("crearpaciente_esmenor")?.value,
        documentores = this.crearPacienteForm.get("crearpaciente_documentores")?.value,
        responsable = this.crearPacienteForm.get("crearpaciente_responsable")?.value,
        telefonores = this.crearPacienteForm.get("crearpaciente_telefonores")?.value,
        parentescores = this.crearPacienteForm.get("crearpaciente_parentescores")?.value;

    let pacientes: any =  [
      {
        "dni": dni,
        "apellido": apellido,
        "nombre": nombre,
        "hc": hc,
        "celular": celular,
        "sexo": sexo,
        "fechaNacimiento": fechaNacimiento,
        "edad": edad,
        "direccion": direccion,
        "departamento": departamento,
        "provincia": provincia,
        "distrito": distrito,
        "ocupacion": ocupacion,
        "grado": grado,
        "estadoCivil": estadoCivil,
        "esMenor": esMenor,
        "documentores": documentores,
        "responsable": responsable,
        "telefonores": telefonores,
        "parentescores": parentescores,
      }
    ];

    this.admisiones
        .createPatient(pacientes)
        .then((response: any) => {
          console.log(response);
        });
  }

}
