import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  textInput = ''
  msgFromChild = ''
  exclusive: boolean = false
  constructor() {

  }
  receiveChildMessage(msg: any) {
    this.msgFromChild = msg

  }
  ngOnInit(): void {

   
  }

}
