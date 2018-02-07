import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FinancingComponent } from './financing.component';
import { FinancingRoutingModule } from './financing.routing.module';


@NgModule({
  declarations: [
    FinancingComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    FinancingRoutingModule,
    BrowserModule
  ],
  providers: [
  ],
  bootstrap: [ FinancingComponent ]
})
export class FinancingModule {}
