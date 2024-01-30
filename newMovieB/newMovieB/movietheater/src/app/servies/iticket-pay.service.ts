import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { IticketModel } from '../interface/Iticketpay.model';

@Injectable({
  providedIn: 'root'
})
export class IticketPayService {

  baseUrl:string = 'http://localhost:3004/IticketPay/'
  constructor(private http:HttpClient,private router:Router,private route:ActivatedRoute)// Creating a property with Variable http
  { }


  getIticket():Observable<any[]>{
    return this.http.get<any>(`${this.baseUrl}`);
  }
  
   getIticketById(id:number):Observable<IticketModel>{
    return this.http.get<IticketModel>(`${this.baseUrl}/${id}`);
  }
  getIticketByUserId(id:number):Observable<IticketModel[]>{
    return this.http.get<IticketModel[]>(`${this.baseUrl}?userId=${id}`);
  }
  createIticket(booking:IticketModel){
    return this.http.post<IticketModel>(`${this.baseUrl}`,booking);
  }


  
}


