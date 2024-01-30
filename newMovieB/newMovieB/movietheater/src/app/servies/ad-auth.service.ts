import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Admin } from '../interface/admin.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdAuthService {
  baseUrl:string='http://localhost:3004/admin/'

  constructor(private http:HttpClient) { }


  getAdminbyEmail(email:string):Observable<Admin[]>{
    return this.http.get<any>(`${this.baseUrl}?email=${email}`);
  }
  getAdminbyId(Id:number):Observable<Admin[]>{
    return this.http.get<any>(`${this.baseUrl}+${Id}`);
  }
}
