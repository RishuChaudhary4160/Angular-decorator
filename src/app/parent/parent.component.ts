import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  textInput = ''
  msgFromChild = ''
  product: {
    id: any;
    name: string;
    Brand: string;
  }[] | undefined
  userData: any = []
  p: number = 1;
  constructor() {

  }
  receiveChildMessage(msg: any) {
    this.msgFromChild = msg

  }
  ngOnInit(): void {

  }
}
