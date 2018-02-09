import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact.component';

const appRoutes: Routes = [

   { path: 'contact', redirectTo: 'contact', pathMatch: 'full' },
   { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [ RouterModule ],
  providers: []
})

export class ContactRoutingModule { }
