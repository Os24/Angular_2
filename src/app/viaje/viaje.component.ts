import { Component, OnInit } from '@angular/core';

import {Viaje} from '../viaje';

import{VIAJES} from '../mock-viajes';

import {ViajeService} from '../viaje.service'

import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/Observable/of';

@Component({
  selector: 'app-viaje',
  templateUrl: './viaje.component.html',
  styleUrls: ['./viaje.component.css']
})
export class ViajeComponent implements OnInit {

/*viaje: Viaje ={
	imagen: 'http://www.insidecareers.co.uk/wp-content/uploads/London.png',
		boleto: 'American Airlines',
		hotel: 'Camarena',
		precio: 7200,
		descripcion: 'El mejor destino al mejor precio'
}*/


//viajes = VIAJES;
viajes:Viaje[];
viajeSeleccionado: Viaje;

onSelect(viaje:Viaje):void{
	this.viajeSeleccionado =viaje;
}

  constructor(private viajeService: ViajeService) { }

  ngOnInit() {
  	this.getViajes();
  }
	//forma sincróna
	/*getViajes(): void{
		this.viajes = this.viajeService.getViajes();
	}*/

	//forma asícrona
	getViajes() : void{
		this.viajeService.getViajes().subscribe(viaje => this.viajes = vajes);
	}
	}
}
