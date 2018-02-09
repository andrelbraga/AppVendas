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
import { FinancingModule } from './financing/financing.module';
import { ContactModule } from './contact/contact.module';
import { OrderModule } from './order/order.module';

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
    BookModule,
    FinancingModule,
    ContactModule,
    OrderModule

  ],
  providers: [
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
