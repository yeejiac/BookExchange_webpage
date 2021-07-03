import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AddExchangeEventComponent } from './add-exchange-event/add-exchange-event.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddExchangeEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
