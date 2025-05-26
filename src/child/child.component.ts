import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
@Output() sendMessageEmitter=new EventEmitter()
  constructor() { }
@Input() messageFromParent:String | undefined
  ngOnInit(): void {
  }
sendToParent(e:any){
this.sendMessageEmitter.emit(e.target.value)
}
}
