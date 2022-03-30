import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../shared/service.service';
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  foodItems:any
  foodCat:any = []
  isSub:boolean= false
  catWiseItems:any = []
  public date =new Date()
  selectedCat:string = ''
  cart:any = []

  constructor(private service:ServiceService) { }

  ngOnInit(): void {
    this.getFood();
  }

  getFood(){
    this.service.getFood().subscribe(res=>{
      // console.log(res)
      this.foodItems = res
      console.log(this.foodItems)
      let foodCats =[]
      for(let i=0; i<this.foodItems.length; i++){
         foodCats.push(this.foodItems[i].catalogueCategory)
      }
          this.foodCat = [...new Set(foodCats)]
          console.log(this.foodCat)
    })
    this.isSub = true
  }
  catWiseItem(item:any){

    this.catWiseItems = this.foodItems.filter((i:any) => i.catalogueCategory == item)
  }

  addToCart(item:any){
    console.log(this.cart)
    let exist = this.cart.find((i:any) => i.dishId == item.dishId)
    if(exist){
      console.log(exist)
      let index = this.cart.findIndex((i:any)=> i.dishId == exist.dishId)
      this.cart[index].dishQuantity += 1
    }else{
      item.dishQuantity = 1
      this.cart.push(item)
    }
    console.log(this.cart)
  }


  viewCart(){
       
  }
}
