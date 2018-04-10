import { Component, OnInit } from '@angular/core';

import {Viaje} from '../viaje';

import{VIAJES} from '../mock-viajes';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

viaje: Viaje ={
	imagen: 'http://www.insidecareers.co.uk/wp-content/uploads/London.png',
		boleto: 'American Airlines',
		hotel: 'Camarena',
		precio: 7200,
		descripcion: 'El mejor destino al mejor precio'
}


viajes = VIAJES;
viajeSeleccionado: Viaje;

onSelect(viaje:Viaje):void{
	this.viajeSeleccionado =viaje;
}

  constructor() { }

  ngOnInit() {
  }

}
