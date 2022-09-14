import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ProduccionesComponent } from './pages/producciones/producciones.component';
import { ArquitecturaDecoComponent } from './pages/arquitectura-deco/arquitectura-deco.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CampComponent } from './pages/camp/camp.component';
import { SesionesComponent } from './pages/sesiones/sesiones.component';
import { BioComponent } from './pages/bio/bio.component';


@NgModule({
  declarations: [
    HomeComponent,
    ProduccionesComponent,
    ArquitecturaDecoComponent,
    PersonalComponent,
    CarouselComponent,
    CampComponent,
    SesionesComponent,
    BioComponent
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule
  ]
})
export class PortfolioModule { }
