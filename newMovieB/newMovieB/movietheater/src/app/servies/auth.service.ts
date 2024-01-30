import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interface/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl:string='http://localhost:3004/user/'

  constructor(private http:HttpClient) { }

  registerUser(data:any){
    return this.http.post<any>(this.baseUrl,data);
  }

  getUserbyEmail(email:string):Observable<User[]>{
    return this.http.get<any>(`${this.baseUrl}?email=${email}`);
  }
  getUserbyId(Id:number):Observable<User[]>{
    return this.http.get<any>(`${this.baseUrl}+${Id}`);
  }

  
}
