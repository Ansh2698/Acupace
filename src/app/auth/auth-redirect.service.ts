import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
@Injectable()
export class AuthRedirectService implements CanActivate{
  constructor(private router: Router){}
  canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot){
     // check if the user is logged in
     if(localStorage.getItem('currentUser')==null){
         return true;
     }
     // not logged in so redirect to login page with the return url
     this.router.navigate(['/admin/charts/apex']);
     return false;
  }
}
