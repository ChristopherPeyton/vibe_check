import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ChuckNorrisComponent } from './chuck-norris/chuck-norris.component';
import { KickoutComponent } from './kickout/kickout.component';
import { CongratsComponent } from './congrats/congrats.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChuckNorrisComponent,
    KickoutComponent,
    CongratsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
