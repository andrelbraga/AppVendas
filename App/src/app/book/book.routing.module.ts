import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book.component';

const appRoutes: Routes = [

    { path: 'book',   redirectTo: '/book' },
    { path: 'book', component: BookComponent }

];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})

export class BookRoutingModule { }
