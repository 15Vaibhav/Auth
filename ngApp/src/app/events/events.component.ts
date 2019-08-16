import { Component, OnInit } from '@angular/core';
import {EventsService} from '../events.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor(private eventService:EventsService) { }
   events=[];
  ngOnInit() {
      this.eventService.events()
      .subscribe(
        res=>this.events = res,
        err=>console.log(err)
      )
    }
   
  


}
