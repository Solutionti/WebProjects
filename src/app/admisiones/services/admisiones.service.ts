import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdmisionesService {

  constructor() { }

  getPatient(documento: any ) {
    return axios.get(environment.apiClinicSoft + 'getPatient', {
      params: {
        documento: documento
      }
    });
  }

  createPatient(pacientes: any) {
    return axios.post(environment.apiClinicSoft + 'createPatient',
      {
        hc: pacientes[0].hc,
        nombre: pacientes[0].nombre,
        apellido: pacientes[0].apellido,
        documento: pacientes[0].dni,
        email:'prueba@hotmail.com',
        direccion: pacientes[0].direccion,
        telefono: pacientes[0].celular,
        sexo: pacientes[0].sexo,
        fecha_nacimiento: pacientes[0].fechaNacimiento,
        edad: pacientes[0].edad,
        menor_edad: pacientes[0].esMenor,
        familiar_documento: pacientes[0].documentores,
        gruposangunieo:'O+',
        ocupacion: pacientes[0].ocupacion,
        grado_academico: pacientes[0].grado,
        estado_civil: pacientes[0].estadoCivil,
        departamento: pacientes[0].departamento,
        provincia: pacientes[0].provincia,
        distrito: pacientes[0].distrito,
        usuario: 'Clinicsoft',
      }
    );
  }
}
