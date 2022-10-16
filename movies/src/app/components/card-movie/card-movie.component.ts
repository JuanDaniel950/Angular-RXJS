import { Component, OnInit, Input } from '@angular/core';
import { Movie } from './../../interfaces/movie';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.css']
})
export class CardMovieComponent implements OnInit {

  @Input('movie') movie!:Movie;
  constructor() { }

  ngOnInit(): void {
  }
  
  getImage(){

    return (this.movie.Poster === "N/A")? 'https://placehold.jp/600x600.png':this.movie.Poster;
  }
}
