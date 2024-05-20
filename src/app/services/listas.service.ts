import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ListasService {

  constructor() { }

  getSex() {
    return axios.get(environment.apiClinicSoft + 'getSex');
  }

  getDepartaments() {
    return axios.get(environment.apiClinicSoft + 'getDepartaments');
  }

  getAcademics() {
    return axios.get(environment.apiClinicSoft + 'getAcademics');
  }

  getCivilStatus() {
    return axios.get(environment.apiClinicSoft + 'getCivilStatus');
  }

  getDoctor() {
    return axios.get(environment.apiClinicSoft + 'getDoctor');
  }

  getSpecialties(){
    return axios.get(environment.apiClinicSoft + 'getSpecialties');
  }

  getProvince(departamento: any ) {
    return axios.get(environment.apiClinicSoft + 'getProvince', {
      params: {
        "departamento": departamento
      }
    })
  }

  getDistrict(provincia: any ) {
    return axios.get(environment.apiClinicSoft + 'getProvince', {
      params: {
        "provincia": provincia
      }
    })
  }
}
