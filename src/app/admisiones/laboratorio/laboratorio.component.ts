import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-laboratorio',
  templateUrl: './laboratorio.component.html',
})
export class LaboratorioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  laboratorioForm = new FormGroup({

  });

}
