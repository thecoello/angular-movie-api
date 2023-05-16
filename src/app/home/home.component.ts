import { Component, OnInit } from '@angular/core';
import { ApiMovieService } from '../services/api-movie.service';
import { Movies } from '../models/movies-response.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  movies:Movies[]=[]
  constructor(private apiMovieService: ApiMovieService){}

  ngOnInit():void{
    this.apiMovieService.getMovies('the+avengers').subscribe((data) =>{
     this.movies = data.results;
     console.log(this.movies)
    },
    (error)=>{
      console.log(error)
    }
    )
  }

}
