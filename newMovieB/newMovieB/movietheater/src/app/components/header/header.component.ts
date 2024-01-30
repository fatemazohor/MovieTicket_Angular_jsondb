import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../servies/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{

  menuType: string = 'default';
  userName:any
  constructor(private router:Router, private auth:AuthService){
    
  }
  ngOnInit(): void {
    
    this.checkIfLogin()
    if(this.checkIfLogin()==true){
      this.menuType = 'user'
    }else if(this.checkAdIfLogin()==true){
      this.menuType ='admin'
    }else{
      this.menuType ='default'
    }

    // if(this.userName == undefined){
    //   this.getUserName()
    // }
  }



  checkIfLogin(){
    let emailData= sessionStorage.getItem('email')
    if(emailData !=undefined){
      
      return true;
  }else{
      return this.router.navigate(['/home'])
  }
  }
  checkAdIfLogin(){
    let emailData= sessionStorage.getItem('ademail')
    if(emailData !=undefined){
      
      return true;
  }else{
      return this.router.navigate(['/home'])
  }
  }

  logOut(){
    sessionStorage.clear()
    this.router.navigate(['home']);
  }
  adlogOut(){
    sessionStorage.clear()
    this.router.navigate(['home']);
  }

  getUserName(){
    let emailData= sessionStorage.getItem('email')
    let useremail = emailData && JSON.parse('emailData')
    this.auth.getUserbyEmail(useremail).subscribe(
      (res)=>{
        this.userName = res;
      }
    )
  }

}
