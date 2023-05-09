import { Component, OnInit } from '@angular/core';
import { ApiMovieService } from '../services/api-movie.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  movies: Array<any> = []
  constructor(private apiMovieService: ApiMovieService){}

  ngOnInit():void{
    this.apiMovieService.getMovies('the+avengers').subscribe((data) =>{
      console.log(data.results)
      this.movies = data.results
    },
    (error)=>{
      console.log(error)
    }
    )
  }

}
