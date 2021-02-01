import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/core/models/movie';
import {MovieService} from 'src/app/core/services/movie.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  movieList: Movie[] = []
  loading: boolean = false;
  error: string = ""
  ngOnInit(): void {
    this.loading = true
    this.movieService.getMovieList().subscribe({
      next: (result) => {
        this.movieList = result
      },

      error: (errors) => {
        this.loading = false
        console.log(errors),
        
        this.error = errors.error
      },

      complete: () => {
        console.log('Fectching complete')
        this.loading = false
      }
    })

  }

  

}
