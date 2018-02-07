import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BookComponent } from './book.component';
import { BookRoutingModule } from './book.routing.module';

import { HeaderModule } from '../header/header.module';


@NgModule({
  declarations: [
    BookComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    BookRoutingModule,
    BrowserModule,
    HeaderModule
  ],
  providers: [
  ],
  bootstrap: [ BookComponent ]
})
export class BookModule {}
