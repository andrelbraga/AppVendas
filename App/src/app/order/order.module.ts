import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { OrderRoutingModule } from './order.routing.module';
import { OrderComponent } from './order.component';



@NgModule({
  declarations: [
    OrderComponent
  ],
  imports: [
    OrderRoutingModule,
    BrowserModule,
  ],
  exports: [ OrderComponent ],
  providers: [
  ],
  bootstrap: [ OrderComponent ]
})
export class OrderModule {}
