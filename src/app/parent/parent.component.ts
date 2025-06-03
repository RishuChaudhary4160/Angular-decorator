import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  title = 'Project';
  textInput = ''
  msgFromChild = ''
  product: {
    id: any;
    name: string;
    Brand: string;
  }[] | undefined
  userData: any = []
  p: number = 1;
  exclusive: boolean = false
  constructor(private productService: ProductService) {

  }
  receiveChildMessage(msg: any) {
    this.msgFromChild = msg

  }
  ngOnInit(): void {
    this.getProductData()
    this.getUserData()
    this.productService.exclusive.subscribe((res) => {
      this.exclusive = res
    })
  }
  getProductData() {
    this.product = this.productService.getProductsData()
    console.log(this.product, "qqqqqqqqqqq");

  }
  getUserData() {
    this.productService.getUserData().subscribe((res: any) => {
      this.userData = res.users
      console.log(this.userData, ",,,,,,");

    })
  }
}
