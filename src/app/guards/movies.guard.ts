import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MoviesGuard implements CanActivate {

  constructor(
    private router: Router,
  ) {

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if(sessionStorage.getItem('requesToken') && sessionStorage.getItem('LoginFlag')){
      return true;
    }
    this.router.navigate(['iniciar-sesion']);
    return false;
  }
  
}
