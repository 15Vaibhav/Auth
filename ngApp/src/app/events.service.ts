import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private events_uri="http://localhost:3000/api/events";
  private specialEvents_uri="http://localhost:3000/api/special"
  constructor(private http:HttpClient) { }

  events(){
   return this.http.get<any>(this.events_uri)
  }

  specialEvents(){
    return this.http.get<any>(this.specialEvents_uri)
   }
}
