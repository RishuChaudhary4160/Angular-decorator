import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-service-api',
  templateUrl: './service-api.component.html',
  styleUrls: ['./service-api.component.css']
})
export class ServiceApiComponent implements OnInit {
  product: {
    id: any;
    name: string;
    Brand: string;
  }[] | undefined
  userData: any = []
  p: number = 1
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getProductData()
    this.getUserData()
  } getProductData() {
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
