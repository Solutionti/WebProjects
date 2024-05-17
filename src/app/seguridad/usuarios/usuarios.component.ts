import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html'
})
export class UsuariosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  usuariosForm = new FormGroup({
    apellidos_usuarios: new FormControl(''),
    nombre_usuarios: new FormControl(''),
    tipo_usuarios: new FormControl(''),
    telefono_usuarios: new FormControl(''),
    correo_usuarios: new FormControl(''),
    usuario_usuarios: new FormControl(''),
    contraseña_usuarios: new FormControl(''),

  });

}
