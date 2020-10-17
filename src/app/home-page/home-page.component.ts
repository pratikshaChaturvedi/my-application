import { Component, OnInit } from '@angular/core';
import {FormControl, FormsModule} from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  products = [{productCode : 'PC001', productName : 'Product1', productPrice : 100, 
  description : 'Nice product', hsnCode : 'H01'},
              {productCode : 'PC002', productName : 'Product2',  productPrice : 200, 
              description : 'Nice product', hsnCode : 'H02'}];
  productCode:any = "";
productName:any = "";
productPrice : any = "";
description : any = "";
hsnCode : any = "";

showForm:boolean = false;
  constructor( private router : Router) { }

  ngOnInit(): void {
    // localStorage.setItem('products', JSON.stringify(this.products));
  }
  onAdd() {
    console.log("Running", this.productCode);
    console.log("Running", this.productName);
    let data = {productCode : this.productCode, productName : this.productName, 
      productPrice : this.productPrice, description : this.description, hsnCode : this.hsnCode};
    console.log(data);
    this.products.push(data);
    this.router.navigate(["/products"], {queryParams : {data:JSON.stringify(data)}});
    
  }

  onReset() {
    this.productName = "";
    this.productCode = "";
    this.productPrice = "";
    this.description = "";
    this.hsnCode = "";
  }

  onShow() {
    this.showForm =! this.showForm

  }

  onViewProduct( code : any, name : any, price : any, describe : any, hsn : any) {
    let data =  {productCode : code, productName : name, productPrice : price,
    description : describe, hsnCode : hsn};
    console.log("On view product");
    this.router.navigate(["/products"], {queryParams : {data:JSON.stringify(data)}})
  }

  onDelete(i : any) {
    console.log("OnDelete running");
    this.products.splice(i,1);


  }

}
