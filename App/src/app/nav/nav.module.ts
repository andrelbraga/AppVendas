import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavRoutingModule } from './nav.routing.module';
import { NavComponent } from './nav.component';



@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    NavRoutingModule,
    BrowserModule,
  ],
  exports: [ NavComponent ],
  providers: [
  ],
  bootstrap: [NavComponent]
})
export class NavModule {}
