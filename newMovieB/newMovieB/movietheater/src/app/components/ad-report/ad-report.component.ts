import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from '../../servies/movie.service';
import { IticketPayService } from '../../servies/iticket-pay.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MoviesModel } from '../../interface/movie.model';

@Component({
  selector: 'app-ad-report',
  templateUrl: './ad-report.component.html',
  styleUrl: './ad-report.component.css'
})
export class AdReportComponent implements OnInit{

  movieData:any
  ticketData:any
  reportType:string='default';

  formValue!:FormGroup
  movieValue!:FormGroup

  movieModel:MoviesModel =new MoviesModel();

  constructor(
    private router:Router,
    private movieServ: MovieService,
    private itcketContext:IticketPayService,
    private formbuild:FormBuilder){
      this.movieDetails()
      this.ticketDetails()
      
    }
  ngOnInit(): void {
    this.formValue= this.formbuild.group({
      report:['']
    })
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
    this.movieDetails()
    this.ticketDetails()
  }

  getreport(){
    let report = this.formValue.value.report
    if(report == 'ticket'){
       this.reportType = 'ticket'
    }else {
      this.reportType = 'default'
    }
    return this.reportType;
  }

  get title(){
    return this.formValue.controls['title'];
  }
  get director(){
    return this.formValue.controls['director'];
  }
  get duration(){
    return this.formValue.controls['duration'];
  }
  get genera(){
    return this.formValue.controls['genera'];
  }
  get description(){
    return this.formValue.controls['description'];
  }
  get price(){
    return this.formValue.controls['price'];
  }
  get imageLink(){
    return this.formValue.controls['imageLink'];
  }
  get showtime(){
    return this.formValue.controls['showtime'];
  }

  movieDetails() {
      this.movieServ.getMovies().subscribe((movieResult) => {
        
        this.movieData = movieResult
        console.log('movieResult found from movie-ticket')
      });
  
  }
  
  ticketDetails(){
      this.itcketContext.getIticket().subscribe((ticketResult) => {
        
        this.ticketData= ticketResult
        console.log('ticketResult found from ticket')
      });
  }

  get seatrow(){
    let seatrow=[
      {
        "row": "A",
        "noOfSeats": 8
    },
    {
        "row": "B",
        "noOfSeats": 8
    },
    {
        "row": "C",
        "noOfSeats": 8
    },
    {
        "row": "D",
        "noOfSeats": 8
    },
    {
        "row": "E",
        "noOfSeats": 8
    }
    ]
    return seatrow;
  }

  setDataForm(){
    this.movieModel.title=this.movieValue.value.title
    this.movieModel.director=this.movieValue.value.director
    this.movieModel.duration=this.movieValue.value.duration
    this.movieModel.genera=this.movieValue.value.genera
    this.movieModel.country=this.movieValue.value.country
    this.movieModel.price=this.movieValue.value.price
    this.movieModel.showtime=this.movieValue.value.showtime
    this.movieModel.description=this.movieValue.value.description
    this.movieModel.imageLink=this.movieValue.value.imageLink
    this.movieModel.seatRows=this.seatrow
  }
  movieSubmit(){
    this.setDataForm()

    this.movieServ.registerMovie(this.movieModel)
    .subscribe({
      next: res => {
        console.log(res)
        alert("Data saved")
        this.formValue.reset()
        
        this.ngOnInit();
      },
      error: err=>{
        alert('Data not saved')
      }
    })
  }

}
