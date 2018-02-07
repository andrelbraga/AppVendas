import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FooterComponent } from './footer.component';

const appRoutes: Routes = [

   { path: 'footer', redirectTo: 'footer', pathMatch: 'full' },
   { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule],
  providers: []
})

export class FooterRoutingModule { }
