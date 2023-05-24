import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movies-response.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor(private httpClient: HttpClient) {}

  getMovies(title: String): Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(
      'https://api.themoviedb.org/3/search/movie?api_key=e12989941c24db215db174575cc9db8c&query='+title)
  }

  getPopularMovies():Observable<MovieResponse>{
    const headers = new HttpHeaders({'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI5ODk5NDFjMjRkYjIxNWRiMTc0NTc1Y2M5ZGI4YyIsInN1YiI6IjY0NWEyOTI0ZmUwNzdhNWNhZWQ5OWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EipjFvwsdCa8dy83CkHyWZcX5d0xwHKGA72hDig64gs'})
    
    return this.httpClient.get<MovieResponse>(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&limit=10',{headers})
  }


}


