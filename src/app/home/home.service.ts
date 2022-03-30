import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ServiceService } from '../shared/service.service';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private service:ServiceService, private http:HttpClient) { }

  // getFood(){
  //   this.http.get('/foodList')
  // }
}
