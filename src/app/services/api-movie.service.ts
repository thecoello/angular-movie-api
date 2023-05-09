import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movies-response.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiMovieService {

  constructor(private httpClient: HttpClient) {}

  getMovies(title: String): Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(
      'https://api.themoviedb.org/3//search/movie?api_key=e12989941c24db215db174575cc9db8c&query='+title)
  }

}
