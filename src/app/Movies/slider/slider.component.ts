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
      
      data.results.forEach((e,i) => {
        i++
        if(i <= 10){
          console.log(data.results)
          this.sliders = data.results;
        }
      });

    },
      (error) => {
        console.log(error)
      }
    )
  }
}
