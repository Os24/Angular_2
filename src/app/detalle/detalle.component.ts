import { Component, OnInit, Input} from '@angular/core';
import {Viaje} from '../viaje';
@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

@Input() viaje: Viaje;
  constructor() { }

  ngOnInit() {
  }

}
