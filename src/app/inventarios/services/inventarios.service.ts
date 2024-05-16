import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class InventariosService {

  constructor() { }


  verUsuario() {
    return axios.get(environment.apiClinicSoft + 'users'
      // {
      //   params: {
      //     usuario: "jersonsmm"
      //   }
      // }
    );
  }

  

}
