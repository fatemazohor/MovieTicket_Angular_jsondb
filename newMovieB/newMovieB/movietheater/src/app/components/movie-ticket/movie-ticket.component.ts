import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '../../interface/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from '../../servies/movie.service';
import { IticketPayService } from '../../servies/iticket-pay.service';
import { IticketModel } from '../../interface/Iticketpay.model';
@Component({
  selector: 'app-movie-ticket',
  templateUrl: './movie-ticket.component.html',
  styleUrl: './movie-ticket.component.css'
})
export class MovieTicketComponent implements OnInit {

  MovieId!: number;
  IticketData!:IticketModel;
  movieData!:MoviesModel
  
  constructor(
    private routeA: ActivatedRoute,
    private movieServ: MovieService,
    private itcketContext:IticketPayService,
    
    private router: Router
  ) { 
    this.movieDetails(this.MovieId)
    this.getTicket()
  }
  ngOnInit(): void {
    this.routeA.params.subscribe(params => this.MovieId = params['id']);
    this.movieDetails(this.MovieId)
    this.getTicket()
  }

  movieDetails(id: number) {
    this.movieServ.getMovieById(id).subscribe((movieResult) => {
      
      this.movieData = movieResult
      console.log('movieResult found from movie-ticket')
    });

  }

  getTicket(){
    let ticket= sessionStorage.getItem('ticketModel')
    let ticketSet = ticket && JSON.parse(ticket)
    return ticketSet;
  }
  get showDate(){
    let date=this.getTicket().showDate
    return date;
  }

 get Seattotal(){
  let seatTotal=this.getTicket().numberOfSeat
  return seatTotal
 }

 get ticketprice(){
  let price =this.getTicket().price
  return price;

 }

  get seat(){
    let seatlist:string=''
    let seat=this.getTicket().bookedSeat
    
    for (let index = 0; index < seat.length; index++) {
      seatlist += seat[index];
      
    }
    return seat;


  }
  



 










}
