import { Component, OnInit, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {

  // C1
  // @Input () newMovie : any

  movieList : any[] = [
    {id: 1, name: 'Aventure', price: 1000, image: "./assets/img/1.jpg"},
    {id: 2, name: 'Fast and Serious', price: 2000, image: "./assets/img/2.jpg"},
    {id: 3, name: 'Tom and Jerry', price: 3000, image: "./assets/img/3.jpg"},
    {id: 4, name: 'The Magic', price: 4000, image: "./assets/img/4.jpg"},
  ]

  constructor() { }

  ngOnInit(): void {
  }

  // C1 Dùng ngOnchange để thay đổi 
  // ngOnChanges(changes: any){
  //   console.log('newMovie', this.newMovie),
  //   console.log('change', changes)

  //   const {newMovie} = changes;
  //   const movie = changes.newMovie.currentValue;
  //   if(movie && movie?.currentValue?.id !== newMovie?.previousValue?.id){
  //     this.movieList.push(movie)
  //   }
  // }

  handleDeleteMovie(idMovie : number){
    this.movieList = this.movieList.filter(movie => {
      return movie.id !== idMovie
    })
  }

  handleAddMovie(newMovie: any){
    this.movieList.push(newMovie)
  }

}
