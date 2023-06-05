import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MovieResponse } from '../models/movies-response.interface';
import { TvShowsResponse } from '../models/tvshows-response.interface';
@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor(private httpClient: HttpClient) {}

  getPopularShows(idGenre : string):Observable<TvShowsResponse>{
    const headers = new HttpHeaders({'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI5ODk5NDFjMjRkYjIxNWRiMTc0NTc1Y2M5ZGI4YyIsInN1YiI6IjY0NWEyOTI0ZmUwNzdhNWNhZWQ5OWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EipjFvwsdCa8dy83CkHyWZcX5d0xwHKGA72hDig64gs'})
    
    return this.httpClient.get<TvShowsResponse>(
      'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=ES&with_watch_monetization_types=flatrate|free|ads|rent|buy&with_genres='+idGenre,{headers})
  }

  getPopularMovies(idGenre : string):Observable<MovieResponse>{
    const headers = new HttpHeaders({'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI5ODk5NDFjMjRkYjIxNWRiMTc0NTc1Y2M5ZGI4YyIsInN1YiI6IjY0NWEyOTI0ZmUwNzdhNWNhZWQ5OWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EipjFvwsdCa8dy83CkHyWZcX5d0xwHKGA72hDig64gs'})
    
    return this.httpClient.get<MovieResponse>(
      'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_null_first_air_dates=false&language=en-US&page=1&sort_by=popularity.desc&watch_region=ES&with_watch_monetization_types=flatrate|free|ads|rent|buy&with_genres='+idGenre,{headers})
  }


  getShows(title: String): Observable<TvShowsResponse>{
    return this.httpClient.get<TvShowsResponse>(
      'https://api.themoviedb.org/3/search/tv?api_key=e12989941c24db215db174575cc9db8c&query='+title+'&sort_by=popularity.desc')
  }

  getMovies(title: String): Observable<MovieResponse>{
    return this.httpClient.get<MovieResponse>(
      'https://api.themoviedb.org/3/search/movie?api_key=e12989941c24db215db174575cc9db8c&query='+title+'&sort_by=popularity.desc')
  }

  getGenresMovie(): Observable<Object>{
    const headers = new HttpHeaders({'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI5ODk5NDFjMjRkYjIxNWRiMTc0NTc1Y2M5ZGI4YyIsInN1YiI6IjY0NWEyOTI0ZmUwNzdhNWNhZWQ5OWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EipjFvwsdCa8dy83CkHyWZcX5d0xwHKGA72hDig64gs'})
    
    return this.httpClient.get<Object>(
      'https://api.themoviedb.org/3/genre/movie/list',{headers})
  }

  getGenresShows(): Observable<Object>{
    const headers = new HttpHeaders({'accept': 'application/json',
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMTI5ODk5NDFjMjRkYjIxNWRiMTc0NTc1Y2M5ZGI4YyIsInN1YiI6IjY0NWEyOTI0ZmUwNzdhNWNhZWQ5OWNkZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.EipjFvwsdCa8dy83CkHyWZcX5d0xwHKGA72hDig64gs'})
    
    return this.httpClient.get<Object>(
      'https://api.themoviedb.org/3/genre/tv/list',{headers})
  }





}


