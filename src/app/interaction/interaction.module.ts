import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieItemComponent } from './movie-item/movie-item.component';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { InteractionComponent } from './interaction.component';



@NgModule({
  declarations: [MovieListComponent, MovieItemComponent, AddMovieComponent, InteractionComponent],
  imports: [
    CommonModule
  ],
  exports: [
    InteractionComponent,
  ]
})
export class InteractionModule { }
