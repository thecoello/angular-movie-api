import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TitlesComponent } from './Movies/titles/titles.component';
import { SliderComponent } from './Movies/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitlesComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
