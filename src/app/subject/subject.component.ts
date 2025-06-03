import { Component, OnDestroy, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';
import { SubjectOneComponent } from "../subject-one/subject-one.component";
import { SubjectTwoComponent } from "../subject-two/subject-two.component";

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css'],
})
export class SubjectComponent implements OnInit, OnDestroy {

  constructor(private productService: ProductService) { }
  StateName: any
  ngOnInit(): void {
    this.productService.exclusive.next(true)
    this.productService.StateName.subscribe((res) => {
      this.StateName = res
    })
  }
  ngOnDestroy(): void {
    this.productService.exclusive.next(false)
  }

}
