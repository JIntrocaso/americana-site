import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedArtistsComponent } from './components/featured-artists/featured-artists.component';
import { HttpClient } from '@angular/common/http'
@NgModule({
  declarations: [
    AppComponent,
    FeaturedArtistsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
