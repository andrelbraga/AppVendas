import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FinancingComponent } from './financing.component';
import { FinancingRoutingModule } from './financing.routing.module';


@NgModule({
  declarations: [
    FinancingComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    FinancingRoutingModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
  ],
  bootstrap: [ FinancingComponent ]
})
export class FinancingModule {}
