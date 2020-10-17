import { Component, OnInit } from '@angular/core';
import { Router , ActivatedRoute} from '@angular/router';

 
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data : any;
  constructor( private router : Router, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((value)=>{console.log("Value", value)
  this.data=JSON.parse(value.data)})
  }

}
