import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-kardex',
  templateUrl: './kardex.component.html',
})
export class KardexComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  kardexForm = new FormGroup({
    producto_kardex: new FormControl(''),
    inicial_kardex: new FormControl(''),
    final_kardex: new FormControl(''),

  });

  producto_kardex = "";
  inicial_kardex = "";
  final_kardex = "";

}
