import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-movie-table',
  templateUrl: './movie-table.component.html',
  styleUrls: ['./movie-table.component.css']
})
export class MovieTableComponent implements OnInit {
  
  @Input()
  movieList: Array<string> = [];

  @Output()
  movieSelectedEventEmitter =  new EventEmitter();

  movieSelected(selectedMovie: string) { 
    this.movieSelectedEventEmitter.emit(selectedMovie);
  }

  constructor(){}
  ngOnInit():void{

  }
  }


