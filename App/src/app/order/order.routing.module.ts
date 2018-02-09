import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { OrderComponent } from './order.component';

const appRoutes: Routes = [

   { path: 'order', redirectTo: 'order', pathMatch: 'full' },
   { path: 'order', component: OrderComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: []
})

export class OrderRoutingModule { }
