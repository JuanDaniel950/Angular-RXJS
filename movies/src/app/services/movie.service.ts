import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map,of } from 'rxjs';
import { environment } from './../../environments/environment';
import { ResMoviesApi } from './../interfaces/resMoviesApi';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  apiUrl:string = environment.apiKey;
  constructor(private http:HttpClient) { }

  getMovies(searchTerm: String):Observable<ResMoviesApi>{

      return this.http.get<ResMoviesApi>(this.apiUrl +"&s="+searchTerm).pipe(
        map(response=>{
          return response;
        })
      );
   
  }
}
