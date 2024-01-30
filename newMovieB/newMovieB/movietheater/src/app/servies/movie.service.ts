import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, map } from 'rxjs';
import { MoviesModel } from '../interface/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseUrl:string = 'http://localhost:3004/movies/'
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  getMovies(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map(res => {return res}))
  }
  getMovieById(id:number):Observable<MoviesModel>{
    return this.http.get<MoviesModel>(this.baseUrl+id);
  }

  registerMovie(data:any){
    return this.http.post<any>(this.baseUrl,data);
  }
}
