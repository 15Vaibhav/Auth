import { Injectable } from '@angular/core';
import { CanActivate, Router} from '@angular/router';
import {AuthService} from './auth-service.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authSerive:AuthService,private router:Router) { }

  canActivate(): boolean {
    if (this.authSerive.loggedIn()) {
      console.log('true')
      return true
    } else {
      console.log('false')            
      this.router.navigate(['/login'])
      return false
    }
  }
}
