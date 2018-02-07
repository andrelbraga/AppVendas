import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FinancingComponent } from './financing.component';

const appRoutes: Routes = [

   { path: 'financing', redirectTo: 'financing', pathMatch: 'full' },
   { path: 'financing', component: FinancingComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})

export class FinancingRoutingModule { }
