import { Component, OnInit } from '@angular/core';
import {MovieService} from '../../core/services/movie.service'
import {ActivatedRoute} from '@angular/router'
import {MovieDetail} from 'src/app/core/models/movie'

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss']
})
export class MovieDetailComponent implements OnInit {

  movieDetail : MovieDetail | null = null
  constructor(
    private movieService : MovieService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe({
      next: (params) => {
        console.log('params', params)
        this.movieService.getMovieDetail(params.movieId).subscribe({
          next: (result) => {
            this.movieDetail = result
          },

          error: (err) => {
            console.log(err)
          },

          complete: () => {
            console.log('Fetching Completed')
          }
        })
      }
    })
  }

}
