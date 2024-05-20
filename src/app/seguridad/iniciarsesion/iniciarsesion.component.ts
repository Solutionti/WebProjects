import { Component, OnInit } from '@angular/core';
import { LoginService } from '../services/login.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-iniciarsesion',
  templateUrl: './iniciarsesion.component.html',
})
export class IniciarsesionComponent implements OnInit {

  constructor(
    private login: LoginService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validarSesion();
  }

  loginAlert = true;

  loginForm = new FormGroup({
    usuario: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    recordar: new FormControl()
  });

  iniciarSesion(): void {
    let usuario = this.loginForm.get("usuario")?.value,
        password = this.loginForm.get("password")?.value;
    
    this.login
        .iniciarSesion(usuario, password)
        .then((response: any ) => {
          if(response.data.token) {
            sessionStorage.setItem('token', response.data.token);
            localStorage.setItem('token', JSON.stringify(response.data.token));
            this.router.navigate(['/', 'inicio']);
          }
        })
        .catch((response) => {
          this.loginAlert = false;
        });
  }

  validarSesion() {
    const token = localStorage.getItem('token');
    if(token) {
      this.router.navigate(['/', 'inicio']);
    }
    else {
      this.router.navigate(['/']);
    }
  }

}
