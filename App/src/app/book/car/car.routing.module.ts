import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { CarComponent } from './car.component';

const appRoutes: Routes = [

   { path: 'car', redirectTo: 'car', pathMatch: 'full' },
   { path: 'car', component: CarComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: []
})

export class CarRoutingModule { }
