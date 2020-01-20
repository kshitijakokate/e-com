import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  constructor(private _ProdService :SharedService,private router: Router) { }

  public products = [];
  public cart=[];

  ngOnInit() {
    this.products= this._ProdService.getProducts();
  }

  addToCart(product:any){
    this.cart.push(product);

  }

  Login(){
    this.router.navigate(['login']);
  }

  checkout(){
    this._ProdService.setcart(this.cart);
    this.router.navigate(['checkout']);
    //redirect to checkout page
  }

}
