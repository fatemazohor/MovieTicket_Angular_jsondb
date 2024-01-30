import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesModel } from '../../interface/movie.model';
import { Router } from '@angular/router';
import { MovieService } from '../../servies/movie.service';
import { IticketPayService } from '../../servies/iticket-pay.service';

@Component({
  selector: 'app-ad-movie',
  templateUrl: './ad-movie.component.html',
  styleUrl: './ad-movie.component.css'
})
export class AdMovieComponent implements OnInit{
  

  movieValue!:FormGroup

  movieModel:MoviesModel =new MoviesModel();

constructor(private router:Router,
  private movieServ: MovieService,
  private itcketContext:IticketPayService,
  private formbuild:FormBuilder){

}

  ngOnInit(): void {
    this.movieValue = this.formbuild.group({
      title:['',[Validators.required]],
      director:['',[Validators.required]],
      duration:['',[Validators.required]],
      genera:['',[Validators.required]],
      releaseDate:[''],
      country:[''],
      description:['',[Validators.required]],
      // censorship:[''],
      // trailerLink:[''],
      imageLink:['',[Validators.required]],
      // status:[''],
      price:['',[Validators.required]],
      showtime:['',[Validators.required]],
      // seatRows:[]
      })
  }
}

