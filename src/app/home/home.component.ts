import { Component} from '@angular/core'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

export class HomeComponent {
  titleMovie: string = ""
  titleType: string = "Movie"
  findtype: string = ""
  findMovie: string = ""
  setIdMovie: any = ''
  setIdShow: any = ''
  currentYear: string = new Date().getFullYear().toString()

  findTitle(): void {
    this.findMovie = this.titleMovie
    this.findtype = this.titleType
  }

  getIdTVShow(id: any):void{
    this.setIdShow = id
    this.setIdMovie = ''
  }

  getIdMovie(id: any):void{
    this.setIdMovie = id
    this.setIdShow = ''
  }

  goBack(empty: any){
    this.titleMovie = ''
    this.findtype = ''
    this.findMovie = ''
    this.setIdMovie = ''
    this.setIdShow = ''
  }

  reload(){
    window.location.reload();
  }

}