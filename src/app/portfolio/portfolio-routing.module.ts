import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduccionesComponent } from './pages/producciones/producciones.component';
import { ArquitecturaDecoComponent } from './pages/arquitectura-deco/arquitectura-deco.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { CampComponent } from './pages/camp/camp.component';
import { SesionesComponent } from './pages/sesiones/sesiones.component';
import { BioComponent } from './pages/bio/bio.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'producciones', component: ProduccionesComponent },
      { path: 'arquitectura-deco', component: ArquitecturaDecoComponent },
      { path: 'camp', component: CampComponent },
      { path: 'sesiones', component: SesionesComponent },
      { path: 'personal', component: PersonalComponent },
      { path: 'bio', component: BioComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
