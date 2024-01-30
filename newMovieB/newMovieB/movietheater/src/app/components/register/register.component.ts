import { Component } from '@angular/core';
import { AuthService } from '../../servies/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../../interface/user.model';
import { passwordMatchValidator } from '../../validator/password.match';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formValue!:FormGroup
  userData:User =new User()

  constructor(private authServ:AuthService, 
    private formBuild:FormBuilder, private route:Router){}
  
  ngOnInit(): void {
   this.formValue=this.formBuild.group({
    name:['',[Validators.required, Validators.pattern(/^[a-zA-Z]+(?: [a-zA-Z]+)*$/)]],
    email:['',[Validators.required,Validators.email]],
    password:['',[Validators.required]],
    confirmPassword: ['', Validators.required]
   },{
    Validators:passwordMatchValidator
   })
  }


  get name() {
    return this.formValue.controls['name'];
  }
  get email() {
    return this.formValue.controls['email'];
  }

  get password() {
    return this.formValue.controls['password'];
  }
  get confirmPassword() {
    return this.formValue.controls['confirmPassword'];
  }

  saveUser(){
    this.userData.name= this.formValue.value.name
    this.userData.email= this.formValue.value.email
    this.userData.password= this.formValue.value.password

    this.authServ.registerUser(this.userData).subscribe({
      next:res=>{
        alert('Register complete')
        this.route.navigate(['login'])
      },
      error:err=>{
        alert('Something went wrong.')
      }
    })
  }
}
