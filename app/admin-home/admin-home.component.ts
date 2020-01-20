import { Component, OnInit } from '@angular/core';
import { SharedService } from '../Services/shared.service';
import {Router} from '@angular/router';
@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  
  constructor(private _ProdService :SharedService, private router:Router) { }

  public products = [];  

  ischecked:boolean;
  isShowEdit=true;

  prod:any;
    eid: number;
    eProduct:string;
    eprice:number;

  isShow = true;

  ngOnInit() {
    this.products= this._ProdService.getProducts();
  }

  onclick(){
    this.isShow = !this.isShow;
  }


  onSave()
  {
    this.prod ={
      id:this.eid,
      name:this.eProduct,
      Price:this.eprice
  } 

  
this.products.push(this.prod);
this._ProdService.setProducts(this.products);
this.products= this._ProdService.getProducts();
this.isShow=true;
this.eid=null;
this.eProduct='';
this.eprice=null;
}

Login(){
  this.router.navigate(['login']);
}


   onSubmit(){
     
     this.isShow=!this.isShow;

   }
   p:any;
   onDelete(){
     console.log(this.products);
    
     for (var product of this.products) {
      if(product.ischecked==true){
        var a= this.products.indexOf(product);
        this.products.splice(a,1);
      }

      this._ProdService.setProducts(this.products);
      this.products= this._ProdService.getProducts();

      console.log(this.products);

  }
   }

   onEdit(){
     //this.isShowEdit=!this.isShowEdit;
     console.log(this.products);

     for (var product of this.products) {
      if(product.ischecked==true){
        product.showedited=true;
      
      }

      
   }

  }
}
