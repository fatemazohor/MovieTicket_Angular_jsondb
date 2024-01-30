import { Component } from '@angular/core';
import { AuthService } from '../../servies/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  formValue!:FormGroup
  movidid:any;

  constructor(private authServ:AuthService, private formBuild:FormBuilder
    ,private route:Router){

  }
  ngOnInit(): void {
    this.formValue=this.formBuild.group({
      email:['',[Validators.required,Validators.email]],
      password:['',[Validators.required]]
    })
    this.getreturnData();
  }

  get email() {
    return this.formValue.controls['email'];
  }

  get password() {
    return this.formValue.controls['password'];
  }

  getreturnData(){
    return this.movidid=sessionStorage.getItem('movieid')
  }
  

  login(){
    let email = this.formValue.value.email
    let password = this.formValue.value.password
    this.authServ.getUserbyEmail(email).subscribe({
      next:res=>{
        if(res.length >0 && res[0].password == password){
          sessionStorage.setItem('email', email)
          let userid:any=res[0].id
          sessionStorage.setItem('userId', userid)
          alert('loging successful')
          this.route.navigate(['home/']);
        }else{
          alert('loging unsucessful')
        }
      },
      error:err=>{
        console.warn(err)
        alert('something went wrong')
      }
    })

    sessionStorage.removeItem('movidId');
    

  }
  
  
}
