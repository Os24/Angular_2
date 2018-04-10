import { Injectable } from '@angular/core';

import { Viaje } from './viaje';
import { VIAJES } from './mock-viajes';

@Injectable()
export class ViajeService {
  /*getViajes():Viaje[]{
  	return VIAJES;
  }*/
  getViajes(): Observable<Viaje[]>{
  	return of(VIAJES);
  }
  
  constructor() { }
}
