import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cerrarsesion',
  templateUrl: './cerrarsesion.component.html'
})
export class CerrarsesionComponent implements OnInit {

  @Input() titulo: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
