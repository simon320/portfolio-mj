import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduccionesComponent } from './pages/producciones/producciones.component';
import { ArquitecturaDecoComponent } from './pages/arquitectura-deco/arquitectura-deco.component';

const routes: Routes = [
  {
    path:'',
    children: [
      { path: 'producciones', component: ProduccionesComponent },
      { path: 'arquitectura-deco', component: ArquitecturaDecoComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
