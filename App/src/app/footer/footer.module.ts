import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FooterComponent } from './footer.component';
import { FooterRoutingModule } from './footer.routing.module';


import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    FooterComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    FooterRoutingModule,
    HeaderModule
  ],
  exports: [ FooterComponent ],
  providers: [ ],
  bootstrap: [ FooterComponent ]
})
export class FooterModule {}
