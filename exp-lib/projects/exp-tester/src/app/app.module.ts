import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// -- Library imported
import { ExpLibModule } from "exp-lib";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExpLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
