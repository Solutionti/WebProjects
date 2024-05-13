import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-colposcopia',
  templateUrl: './colposcopia.component.html',
})
export class ColposcopiaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  colposcopiaForm = new FormGroup ({

    dni_colposcopia: new FormControl(''),
    nombre_colposcopia: new FormControl(''),
    fecha_colposcopia: new FormControl(''),
    medico_colposcopia: new FormControl(''),
    escamo_colposcopia: new FormControl(''),
    cervix_colposcopia: new FormControl(''),
    vagina_colposcopia: new FormControl(''),
    vulva_colposcopia: new FormControl(''),
    perineo_colposcopia: new FormControl(''),
    parianal_colposcopia: new FormControl(''),
    biopsia_colposcopia: new FormControl(''),
    papanicolaou_colposcopia: new FormControl(''),
    conclusiones_colposcopia: new FormControl(''),
    archivo1_colposcopia: new FormControl(''),
    archivo2_colposcopia: new FormControl('')
});


}
