import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-subject-two',
  templateUrl: './subject-two.component.html',
  styleUrls: ['./subject-two.component.css']
})
export class SubjectTwoComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
onchange(uname:any){
 this.productService.StateName.next(uname.value)
}
}
