export class IticketModel{
    id:number=0
    userId !:number 
    movieName !:string 
    showTime !:string 
    showDate !:string
    bookedSeat:any=[] 
    numberOfSeat !:number  
    price !:number 
    timstamp !:string
    paymentMethod !:number 
}