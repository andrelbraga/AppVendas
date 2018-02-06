import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header.component';

const appRoutes: Routes = [

   { path: 'header', redirectTo: 'header', pathMatch: 'full' },
   { path: 'header', component: HeaderComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: []
})

export class HeaderRoutingModule { }
