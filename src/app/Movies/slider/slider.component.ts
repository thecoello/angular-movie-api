import { Component, OnInit } from '@angular/core';
import { Movies } from '../../models/movies-response.model';
import { ApiServices } from '../../services/api-movie.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  sliders: Movies[] = []
  constructor(private ApiServices: ApiServices) { }

  ngOnInit(): void {
    this.ApiServices.getPopularMovies().subscribe((data) => {
      
      this.sliders = data.results;


    },
      (error) => {
        console.log(error)
      }
    )
  }
}
