import { Component, OnInit } from '@angular/core';
import {products} from '../products'
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  title:string ='Component to view'
  products : products = {
    name:"ngoc trinh",
    age:20,
    isMarried : false,
    linkImage:'https://icdn.dantri.com.vn/2019/07/15/thukhoa-2-1563162298758.jpeg',
    LinkProfile:'https://dantri.com.vn/',
    
  }
  constructor() { }

  ngOnInit() {
  }

}
