import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';


import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BrowserModule,
    HomeRoutingModule,
    HeaderModule
  ],
  exports: [ HomeComponent ],
  providers: [ ],
  bootstrap: [ HomeComponent ]
})
export class HomeModule {}
