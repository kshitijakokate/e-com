import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public cartlist =[];
  constructor(private _ProdService :SharedService,private router: Router) { }


  ngOnInit() {

    this.cartlist=this._ProdService.getcart();
    console.log(this.cartlist);
  }

  placeorder(){
    alert('Order Placed Successfully');

    this.router.navigate(['user']);
    //route to userhome
  }

}
