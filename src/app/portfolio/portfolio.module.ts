import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProduccionesComponent } from './pages/producciones/producciones.component';
import { ArquitecturaDecoComponent } from './pages/arquitectura-deco/arquitectura-deco.component';
import { RouterModule } from '@angular/router';
import { PersonalComponent } from './pages/personal/personal.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProduccionesComponent,
    ArquitecturaDecoComponent,
    PersonalComponent,
    CarrouselComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
