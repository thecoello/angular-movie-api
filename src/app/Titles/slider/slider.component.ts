import { Component, EventEmitter, OnInit, Output } from '@angular/core'
import { TvShows } from 'src/app/models/tvshows-response.model'
import { Movies } from '../../models/movies-response.model'
import { ApiServices } from '../../services/api-titles.service'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  slidersMovie: Movies[] = []
  slidersTvShows: TvShows[] = []
  displaySliderMovies: Boolean = false
  displaySliderShows: Boolean = false

  constructor(private ApiServices: ApiServices) { }

  @Output() _idTVShow:  EventEmitter<any> = new EventEmitter()
  @Output() _idMovie:  EventEmitter<any> = new EventEmitter()

  ngOnInit(): void {
    this.displaySliderMovies = true
    this.moviesSlider()
    this.showsSlider()
  }

  showsSlider(): void{
    this.ApiServices.getPopularShows('').subscribe((data) => {
      this.slidersTvShows = data.results
    },
      (error) => {
        console.log(error)
      }
    )
  }

  moviesSlider(): void{
    this.ApiServices.getPopularMovies('').subscribe((data) => {
      this.slidersMovie = data.results
    },
      (error) => {
        console.log(error)
      }
    )
  }

  activeSliderMovie(){
    this.displaySliderMovies = true
    this.displaySliderShows = false
  }

  activeSliderTvShow(){
    this.displaySliderShows = true
    this.displaySliderMovies = false
  }

  setIdTvShow(id: any){
    this._idTVShow.emit(id)
  }

  setIdMovie(id: any){
    this._idMovie.emit(id)
  }

}
