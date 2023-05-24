import { Component, OnInit } from '@angular/core';
import { ApiServices } from '../../services/api-movie.service';
import { Movies } from '../../models/movies-response.model';

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})
export class TitlesComponent implements OnInit {
  movies: Movies[] = []
  constructor(private ApiServices: ApiServices) { }

  ngOnInit(): void {
    this.ApiServices.getMovies('the+avengers').subscribe((data) => {
      this.movies = data.results;
    },
      (error) => {
        console.log(error)
      }
    )
  }
}
