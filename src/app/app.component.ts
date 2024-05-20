import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ClinicSoftPeru';
  ciudad = "Peru";

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.validarSesion();
  }

  validarSesion() {
    const token = localStorage.getItem('token');
    if(token) {
      // this.router.navigate(['/', 'inicio']);
    }
    else {
      this.router.navigate(['/']);
    }
  }
}



