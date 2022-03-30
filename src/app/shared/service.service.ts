import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private foodList = "../assets/fooddata/food.json"
  constructor(private http:HttpClient) { }

  getFood(){
    return this.http.get(this.foodList)
  }
}
