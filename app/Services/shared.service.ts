import { Injectable } from '@angular/core';
   

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  productList:any;
  cart:any;
  constructor() {
    this.productList=[
      {"id":1, "name": "SmartPhone", "Price":100},
      {"id":2, "name": "Charger", "Price":40},
      {"id":3, "name": "Headphones", "Price":70},
      {"id":4, "name": "Speakers", "Price":110},
      {"id":5, "name": "Shoes", "Price":1000},
      {"id":6, "name": "Watch", "Price":500},
      {"id":7, "name": "Bluetooth speaker", "Price":10},
      {"id":8, "name": "Pen Stand", "Price":50},
    ];
    this.cart=[];
   }

  getProducts(){
    
    return this.productList;
  }
  setProducts(plist:any){
    this.productList=plist;
  }

  getcart(){
    return this.cart;
  }

  setcart(plist:any){
    this.cart=plist;
  }



}
