import { Component, OnInit } from '@angular/core';
import { IticketPayService } from '../../servies/iticket-pay.service';
import { MovieService } from '../../servies/movie.service';
import { IticketModel } from '../../interface/Iticketpay.model';

@Component({
  selector: 'app-my-ticket',
  templateUrl: './my-ticket.component.html',
  styleUrl: './my-ticket.component.css'
})
export class MyTicketComponent implements OnInit{

  tUserId !:any
  movieId!:any
  ticketData !:any
  movieData !:any
  constructor(private ticketServ:IticketPayService , 
    private movieServ:MovieService){}
  ngOnInit(): void {
    this.getUserId()
    this.getticketDetails(this.tUserId)
    
  }

  getUserId(){
    let userData=sessionStorage.getItem('userId')
    let userId = userData && JSON.parse(userData)
    this.tUserId=userId
  }

  getticketDetails(id:number){
    this.ticketServ.getIticketByUserId(id).subscribe(
      res =>{
        this.ticketData = res;
      }
    )
  }

  getMovieDetails(id:any){
    this.movieServ.getMovieById(id).subscribe(
      res =>{
        this.movieData = res.title;
      }
    )
  }


    

}
