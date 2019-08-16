import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth-service.service';
import {Router} from '@angular/router'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData={}
  constructor(private loginService:AuthService,private router:Router) { }

  ngOnInit() {
  }
  loginUser(){
    this.loginService.loginUser(this.loginUserData)
    .subscribe(
      
        res=>{
          console.log(res)
          localStorage.setItem("token",res.token)
          this.router.navigate(['/special'])
        console.log(res);
      },
      err=>console.log('errr',err)
    )
  }
}
