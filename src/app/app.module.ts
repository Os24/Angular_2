import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViajeComponent } from './viaje/viaje.component';
import { DetalleComponent } from './detalle/detalle.component';
import { HeroService } from './hero.service';
import { ViajeService } from './viaje.service';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ViajeComponent,
    DetalleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [HeroService, ViajeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
