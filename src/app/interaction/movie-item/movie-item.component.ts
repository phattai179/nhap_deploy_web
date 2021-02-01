import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-movie-item',
  templateUrl: './movie-item.component.html',
  styleUrls: ['./movie-item.component.scss']
})
export class MovieItemComponent implements OnInit {

  @Output () onDelete = new EventEmitter;
  @Input () movie: any;
  constructor() { }

  ngOnInit(): void {
  }

  handleDeleteMovie(){
    this.onDelete.emit(this.movie.id)
  }

}
