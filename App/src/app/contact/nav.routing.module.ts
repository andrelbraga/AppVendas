import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { NavComponent } from './nav.component';

const appRoutes: Routes = [

   { path: 'nav', redirectTo: 'nav', pathMatch: 'full' },
   { path: 'nav', component: NavComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})

export class NavRoutingModule { }
