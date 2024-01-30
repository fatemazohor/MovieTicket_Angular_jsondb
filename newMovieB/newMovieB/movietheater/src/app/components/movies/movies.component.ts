import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../servies/movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent implements OnInit{
   movieDisplay:any=[]
   constructor(private movieServ:MovieService){}
  ngOnInit(): void {
    this.loadMovies()
  }

  loadMovies(){
    this.movieServ.getMovies()
    .subscribe({
      next:res => {
        console.log('movie found')
        this.movieDisplay = res
      }
    })
  }
  getMovieDetails(){
    
  }

}
