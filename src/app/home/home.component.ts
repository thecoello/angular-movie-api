import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})


export class HomeComponent   {
  titleMovie: string = ""
  titleType: string = "Movie"
  findtype: string = ""
  findMovie: string = ""


  findTitle(): void {
    this.findMovie = this.titleMovie
    this.findtype = this.titleType

  }

}