import { NgModule } from '@angular/core';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSidenavModule } from '@angular/material/sidenav';


@NgModule({
  exports: [
    MatCheckboxModule,
    MatSidenavModule
  ]
})
export class MaterialModule { }
