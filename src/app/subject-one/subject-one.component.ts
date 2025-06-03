import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-subject-one',
  templateUrl: './subject-one.component.html',
  styleUrls: ['./subject-one.component.css']
})
export class SubjectOneComponent implements OnInit {

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
  }
onchange(uname:any){
 this.productService.StateName.next(uname.value)
}
}
