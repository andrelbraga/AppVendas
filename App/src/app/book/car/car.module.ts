import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CarComponent } from './car.component';
import { CarRoutingModule } from './car.routing.module';


@NgModule({
  declarations: [
    CarComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    CarRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [ CarComponent ]
})
export class CarModule {}
