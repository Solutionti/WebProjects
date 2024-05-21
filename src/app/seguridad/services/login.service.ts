import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  iniciarSesion(email: any , password: any ) {
    return axios.post(environment.apiClinicSoft + 'login',
      {
        email: email,
        password: password
      }
    );
  }
}
