import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { LoaderService } from '../services/loader.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class LoaderComponent implements OnInit {

  constructor(
    public loader: LoaderService
  ) { }

  ngOnInit(): void {
  }

}
