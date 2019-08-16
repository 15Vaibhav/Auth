import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service'
import { HttpErrorResponse } from '@angular/common/http';
import {Router} from '@angular/router'

@Component({
  selector: 'app-special-events',
  templateUrl: './special-events.component.html',
  styleUrls: ['./special-events.component.css']
})
export class SpecialEventsComponent implements OnInit {

  constructor(private eventService:EventsService,private router:Router) { }
  specialEvents=[];
  ngOnInit() {
      this.eventService.specialEvents()
      .subscribe(
        res=>this.specialEvents = res,
        err=>{console.log(err)
          if(err instanceof HttpErrorResponse){
            if(err.status==401){
              this.router.navigate(['/login'])
            }
          }
        }
      )
    }
  


}
