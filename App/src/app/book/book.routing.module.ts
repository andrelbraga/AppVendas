import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book.component';
import { CarComponent } from './car/car.component';

const appRoutes: Routes = [

    { path: 'book',   redirectTo: 'book' },
    { path: 'book', component: BookComponent },
    { path: 'car/:id', component: CarComponent }

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
