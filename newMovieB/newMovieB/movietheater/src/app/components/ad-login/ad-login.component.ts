import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdAuthService } from '../../servies/ad-auth.service';

@Component({
  selector: 'app-ad-login',
  templateUrl: './ad-login.component.html',
  styleUrl: './ad-login.component.css'
})
export class AdLoginComponent {
  formValue!: FormGroup

  constructor(private authServ: AdAuthService, private formBuild: FormBuilder
    , private route: Router) { }

  ngOnInit(): void {
    this.formValue = this.formBuild.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })

  }

  get email() {
    return this.formValue.controls['email'];
  }

  get password() {
    return this.formValue.controls['password'];
  }

  adlogin() {
    let email = this.formValue.value.email
    let password = this.formValue.value.password
    this.authServ.getAdminbyEmail(email).subscribe({
      next: res => {
        if (res.length > 0 && res[0].password == password) {
          sessionStorage.setItem('ademail', email)
          let userid: any = res[0].id
          sessionStorage.setItem('aduserId', userid)
          alert('Admin loging successful')
          this.route.navigate(['home']);
        } else {
          alert('Admin loging unsuccessful')
        }
      },
      error: err => {
        console.warn(err)
        alert('Something went wrong')
      }
    })


  }




}
