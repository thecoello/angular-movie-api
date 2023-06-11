import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core'
import { ApiServices } from '../../services/api-titles.service'
import { Movies } from '../../models/movies-response.model'
import { TvShows } from 'src/app/models/tvshows-response.model'

@Component({
  selector: 'app-titles',
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss']
})

export class TitlesComponent implements OnInit, OnChanges {
  movies: Movies[] = []
  tvshows: TvShows[] = []
  titleMovies: string = ""
  titleTvShows: string = ""
  displayMovies: Boolean = false
  displayShows: Boolean = false
  genresMovies: Array<any> = []
  genresTvShows: Array<any> = []
  idShowGenre: string = ''
  idMovieGenre: string = ''

  constructor(private ApiServices: ApiServices) { }

  @Input() _titleMovie: string = ""
  @Input() _typeTitle: string = ""
  @Output() _idTVShow:  EventEmitter<any> = new EventEmitter()
  @Output() _idMovie:  EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    this.popularMovies()
    this.popularShows()
    this.genresMovie()
    this.genresShows()
  }

  ngOnChanges(changes: SimpleChanges): void {

    if (this._titleMovie) {
        if (this._typeTitle === "Movie") {
          this.findMovie(this._titleMovie)
        } else if (this._typeTitle === "TV Show") {
          this.findShow(this._titleMovie)
        }
    }
  }

  popularShows():void{
    this.ApiServices.getPopularShows(this.idShowGenre).subscribe((data) => {
      this.tvshows = data.results
      this.displayShows = true
      this.titleTvShows = "Popular Shows"
    },
      (error) => {
        console.log(error)
      }
    )
  }

  setGenreShows(event: any){
    this.idShowGenre = event.target.value
    this.popularShows()
  }

  setGenreMovie(event: any){
    this.idMovieGenre = event.target.value
    this.popularMovies()
  }

  popularMovies():void{
    this.ApiServices.getPopularMovies(this.idMovieGenre).subscribe((data) => {
      this.movies = data.results
      this.displayMovies = true
      this.titleMovies = "Popular Movies"
    },
      (error) => {
        console.log(error)
      }
    )
  }
 
  findMovie(title: string): void {
    this.ApiServices.getMovies(title).subscribe((data) => {
      this.movies = data.results
      this.displayMovies = true
      this.displayShows = false
      this.titleMovies = "Movies Result: " + title
    },
      (error) => {
        console.log(error)
      }
    )
  }

  findShow(title: string): void {
    this.ApiServices.getShows(title).subscribe((data) => {
      this.tvshows = data.results
      this.displayMovies = false
      this.displayShows = true
      this.titleTvShows = "TV Shows Result: " + title
    },
      (error) => {
        console.log(error)
      }
    )
  }

  genresMovie() {
    this.ApiServices.getGenresMovie().subscribe((data) => {
      this.genresMovies = Object.values(data)[0]
    },
      (error) => {
        console.log(error)
      }
    )
  }

  genresShows() {
    this.ApiServices.getGenresShows().subscribe((data) => {
      this.genresTvShows = Object.values(data)[0]
    },
      (error) => {
        console.log(error)
      }
    )
  }

  setIdTvShow(id: any){
    this._idTVShow.emit(id)
  }

  setIdMovie(id: any){
    this._idMovie.emit(id)
  }
}
