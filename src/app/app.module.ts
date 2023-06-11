import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TitlesComponent } from './Titles/titles/titles.component';
import { SliderComponent } from './Titles/slider/slider.component';
import { FormsModule } from '@angular/forms';
import { TitleInfoComponent } from './Titles/title-info/title-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TitlesComponent,
    SliderComponent,
    TitleInfoComponent
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
