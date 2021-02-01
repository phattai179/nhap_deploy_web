import { Component, OnInit, ViewChild } from '@angular/core';
import {MovieListComponent} from './movie-list/movie-list.component'

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.scss']
})
export class InteractionComponent implements OnInit {

  // C1
  //newMovie : any

  // C2
  @ViewChild ('movieList') movieListComponent !:MovieListComponent

  constructor() { }

  ngOnInit(): void {
  }



  handleAddMovie(movie: any){
    // C1
    //this.newMovie = movie

    // C2
    this.movieListComponent.handleAddMovie(movie)

  }

}
