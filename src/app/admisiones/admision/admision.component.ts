import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admision',
  templateUrl: './admision.component.html',
})
export class AdmisionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  date = new Date();
  fechaActual = String(this.date.getFullYear() + '-' +
    String(this.date.getMonth() + 1).padStart(2, '0') + '-' +
    String(this.date.getDate()).padStart(2, '0')
  );

}
