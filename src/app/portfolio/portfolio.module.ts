import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProduccionesComponent } from './pages/producciones/producciones.component';
import { ArquitecturaDecoComponent } from './pages/arquitectura-deco/arquitectura-deco.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProduccionesComponent,
    ArquitecturaDecoComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
