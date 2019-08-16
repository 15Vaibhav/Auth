import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class AuthService {
    private register_Url="http://localhost:3000/api/register"
    private login_Url = "http://localhost:3000/api/login"
    constructor(private http:HttpClient,private router:Router) { }

    registerUser(user){
      return  this.http.post<any>(this.register_Url,user)
    }
    loginUser(user){
      return  this.http.post<any>(this.login_Url,user)

    }
    loggedIn(){
       return !!localStorage.getItem('token')
    }
    getToken(){
      return localStorage.getItem('token')
    }
    logOut(){
      localStorage.removeItem('token')
      this.router.navigate(['/events'])
    }
}
