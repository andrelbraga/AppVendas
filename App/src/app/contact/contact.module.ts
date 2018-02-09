import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact.routing.module';
import { ContactComponent } from './contact.component';



@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    ContactRoutingModule,
    BrowserModule,
  ],
  exports: [ ContactComponent ],
  providers: [
  ],
  bootstrap: [ ContactComponent ]
})
export class ContactModule {}
