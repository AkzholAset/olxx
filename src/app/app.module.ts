import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {CreateadComponent} from './createad/createad.component';
import {ContentComponent} from './content/content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CreateadComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
