import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { BlockUIModule } from 'ng-block-ui';
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app.routing.module';



import { HomeModule } from './home/home.module';
import { NavModule } from './nav/nav.module';
import { HeaderModule } from './header/header.module';
import { FooterModule } from './footer/footer.module';
import { BookModule } from './book/book.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BlockUIModule,
    HomeModule,
    NavModule,
    HeaderModule,
    FooterModule,
    BookModule
  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
