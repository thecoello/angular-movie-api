import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core'
import { ApiServices } from '../../services/api-titles.service'

@Component({
  selector: 'app-title-info',
  templateUrl: './title-info.component.html',
  styleUrls: ['./title-info.component.scss']
})
export class TitleInfoComponent implements OnChanges {
  movies: Array<any> = []
  tvshows: Array<any> = []
  displayTvShow: boolean = false
  displayMovie: boolean = false
  @Input() _idMovie: any
  @Input() _idTVShow: any
  @Output() _goBack:  EventEmitter<any> = new EventEmitter()

  constructor(private ApiServices: ApiServices) { }

  ngOnChanges(changes: SimpleChanges): void {

    if(this._idMovie){
      this.getMovieById(this._idMovie)
      this.displayTvShow = false
      this.displayMovie = true
      this._idTVShow = ''
    }
    
    if(this._idTVShow){
      this.getShowById(this._idTVShow)
      this.displayTvShow =  true
      this.displayMovie = false
      this._idMovie = ''
    }

  }

  getMovieById(id: string) {
    this.ApiServices.getMovieInfo(id).subscribe((data) => {
      this.movies = [data]
    },
      (error) => {
        console.log(error)
      }
    )
  }

  getShowById(id: string) {
    this.ApiServices.getShowInfo(id).subscribe((data) => {
      this.tvshows = [data]
    },
      (error) => {
        console.log(error)
      }
    )
  }

  goBack(){
    this._goBack.emit('')
    this.displayMovie = false
    this.displayTvShow = false
    this._idTVShow = ''
    this._idMovie = ''
    this.movies = []
    this.tvshows = []
  }
}