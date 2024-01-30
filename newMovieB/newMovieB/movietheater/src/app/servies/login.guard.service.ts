import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (sessionStorage.getItem('email')) {
        return true;
      } else{
       this.router.navigate(['login']);
       return false;
      }
    }
}
