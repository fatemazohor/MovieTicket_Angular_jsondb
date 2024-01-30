import { Component, OnInit } from '@angular/core';
import { MoviesModel } from '../../interface/movie.model';
import { ActivatedRoute, Router } from '@angular/router';
import { privateDecrypt } from 'crypto';
import { MovieService } from '../../servies/movie.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IticketPayService } from '../../servies/iticket-pay.service';
import { IticketModel } from '../../interface/Iticketpay.model';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.css'
})
export class MovieDetailsComponent implements OnInit {

  MovieId!: number;
  Movie!: MoviesModel;
  movieData: any;
  bookedSeatList: any[] = []

  selected!: Date;
  week = new Array(7).fill(new Date());

  shows: any = [];

  //iticket data 
  formValue !: FormGroup
  ticketModel:IticketModel=new IticketModel()

  constructor(
    private routeA: ActivatedRoute,
    private movieServ: MovieService,
    private iticketServ: IticketPayService,
    private formBuilder: FormBuilder,
    private router:Router
  ) {
    this.formValue = this.formBuilder.group({
      userId: [''],
      MovieId:[ ''],
      showDate: [''],
      showTime: [''],
      numberOfSeat: [''],
      price: [""],
      timstamp:[ ""],
      paymentMethod: ['',Validators.required]
    })
    
  }
  ngOnInit(): void {
    this.routeA.params.subscribe(params => this.MovieId = params['id']);
    this.movieDetails(this.MovieId);
    this.getNextWeek();
    // this.getShows();
    this.selected = new Date();
    
  }

  movieDetails(id: number) {
    this.movieServ.getMovieById(id).subscribe((movieResult) => {
      this.Movie = movieResult;
      this.movieData = movieResult
      console.log(movieResult)
    });

  }

  getNextWeek() {
    let date = new Date();
    for (let i = 0; i < 7; i++) {
      this.week[i] = new Date(date.getFullYear(), date.getMonth(), (date.getDate() + i));

    }

  }
  getTodayDate():any{
    let date =new Date()
    return date;
  }
  getSelectedDate():any{
    let selectDdate=this.selected
    return selectDdate;
  }


  // getShows() {
  //   this.showServ.getShowByMovieID(this.MovieId).subscribe((showResult) => {
  //     console.log('showResult found');
  //     this.shows = showResult;
  //   })
  // }

  getSeatArray(totalSeat: number) {
    let seatArray = []
    for (let index = 0; index < totalSeat; index++) {
      seatArray.push(index)

    }
    return seatArray;
  }

  bookSeat(rowName: any, seatNo: any) {
    // debugger;

    let isDataExist = this.bookedSeatList.find(m => m.rowName == rowName && m.seatNo == seatNo)
    if (isDataExist == undefined) {
      let seatObj = {
        rowName: rowName,
        seatNo: seatNo
      }
      this.bookedSeatList.push(seatObj);

    } else {
      let rowIndextoDelete = this.bookedSeatList.findIndex(m => m.rowName == rowName && m.seatNo == seatNo)
      this.bookedSeatList.splice(rowIndextoDelete, 1)
    }

  }

  checkIfSeatBooked(row: any, seatNo: any) {
    let isDataExist = this.bookedSeatList.find(m => m.rowName == row && m.seatNo == seatNo)
    if (isDataExist == undefined) {
      return false

    } else {
      return true
    }

  }

  

  totalPrice() {
    let price = this.movieData.price
    let seat: number = this.bookedSeatList.length
    let total = price * seat
    return total;
  }

  submitIticketPay(){
    let userdata = sessionStorage.getItem('userId')
    let userMainId = userdata && JSON.parse(userdata)

    this.ticketModel.userId = userMainId;
    this.ticketModel.movieName = this.movieData.title;
    this.ticketModel.showDate = this.getSelectedDate();
    this.ticketModel.showTime = this.shows.startTime;
    this.ticketModel.numberOfSeat = this.bookedSeatList.length;
    this.ticketModel.price = this.totalPrice();
    this.ticketModel.timstamp = this.getTodayDate();
    this.ticketModel.paymentMethod = this.formValue.value.paymentMethod;
    this.ticketModel.bookedSeat=this.bookedSeatList

    //local storage 
    let ticketDataSet = JSON.stringify(this.ticketModel)
    sessionStorage.setItem('ticketModel',ticketDataSet);

    this.iticketServ.createIticket(this.ticketModel)
    .subscribe({
      next: res => {
        console.log(res)
        alert("Ticket purchase complete.")
        this.formValue.reset()
        this.router.navigate(['/ticket',this.MovieId])
        
      },
      error: err=>{
        alert('Data not saved')
      }
    })
  }


  get paymentMethod() {
    return this.formValue.controls['paymentMethod'];
  }

  

  // getSoldSeat(){
  //   let element:string;
  //   for (let index = 0; index < this.bookedSeatList.length; index++) {
  //     element = this.bookedSeatList[index].rowName
  //     +this.bookedSeatList[index].seatNo+", +"
      
  //   }
    
  // }

}
