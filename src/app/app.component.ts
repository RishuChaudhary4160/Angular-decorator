import { Component } from '@angular/core';
import { ProductService } from './service/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput = ''
  msgFromChild = ''
  exclusive: boolean = false
  constructor(private productService:ProductService) {
  this.productService.exclusive.subscribe((res) => {
      this.exclusive = res
    })
  }
  receiveChildMessage(msg: any) {
    this.msgFromChild = msg

  }
  ngOnInit(): void {

   
  }

}
