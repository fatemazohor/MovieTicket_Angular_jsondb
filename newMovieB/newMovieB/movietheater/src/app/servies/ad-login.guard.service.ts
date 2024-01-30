import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdLoginGuardService {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      if (sessionStorage.getItem('ademail')) {
        return true;
      } else{
       this.router.navigate(['admin']);
       return false;
      }
    }
}
