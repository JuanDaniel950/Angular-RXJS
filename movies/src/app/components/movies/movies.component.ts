import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy} from '@angular/core';
import {fromEvent,tap,map,filter,debounceTime,distinctUntilChanged,switchMap,Observable, concatMap} from 'rxjs'
import { MovieService } from 'src/app/services/movie.service';
import { Movie } from './../../interfaces/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies$!: Observable<Movie[]>;
  desciption:string = "Digita un título"
  // movieSubscription !: Subscription;
  movies:Movie[]=[];
  @ViewChild('searchMovieInput',{static:true})searchMovieInput!: ElementRef;
  constructor(private movieService: MovieService) { }
  // ngOnDestroy(): void {
  //   this.movieSubscription.unsubscribe();
  //   throw new Error('Method not implemented.');
  // }
  // ngAfterViewInit(): void {
  //   // throw new Error('Method not implemented.');
  //   fromEvent(this.searchMovieInput.nativeElement, 'keyup').pipe().subscribe();
  // }

  ngOnInit(): void {
  this.movies$=  fromEvent<Event>(this.searchMovieInput.nativeElement, 'keyup').pipe(
      map((ev:Event)=>{
       const term= (ev.target as HTMLInputElement).value;
       return term;
      }),
      filter((serchTerm:string)=>serchTerm.length == 0 || serchTerm.length>3),
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((searchTerm:String)=>this.movieService.getMovies(searchTerm).pipe(
        map((value)=>{
          console.log('map',value);
          return value.Search;
        })
      ))

    )
  }

  // getMovies(searchTerm:string){
  //   this.movieService.getMovies(searchTerm).subscribe((movie)=>{
  //     this.movies = movie=== undefined? []:movie;
  //   })
  // }

}
