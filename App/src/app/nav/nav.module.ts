import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NavRoutingModule } from './nav.routing.module';
import { NavComponent } from './nav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    NavComponent
  ],
  imports: [
    NavRoutingModule,
    BrowserModule,
    NgbModule.forRoot()
  ],
  exports: [ NavComponent ],
  providers: [
  ],
  bootstrap: [NavComponent]
})
export class NavModule {}
