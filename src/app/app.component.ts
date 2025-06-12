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
  constructor(private productService: ProductService) {
    this.productService.exclusive.subscribe((res) => {
      this.exclusive = res
    })
  }
  receiveChildMessage(msg: any) {
    this.msgFromChild = msg

  }
  ngOnInit(): void {
//callBack Function
// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.

    const calculate = (a:any, b:any, operation:any) => {
      return operation(a, b)
    }
    const add=(a:any,b:any)=>a+b
    const substract=(a:any,b:any)=>a=-b
    const multi=(a:any,b:any)=>a*b
    console.log("Add",calculate(10,20,add));
    console.log("Subs",calculate(10,20,substract));
    console.log("Multi",calculate(10,20,multi));
//callBack Function
    const a =[4,1,3,-2,6,-1,7,-1]
    const firstNeg=(num:any)=>{
return num<0
    }
   const result= a.find(firstNeg)
  //  const result= a.findIndex(firstNeg)
  
  console.log("FirstNeg",result);


  // Currying 
  // transforms a function with multiple arguments into a nested series of functions, each taking a single argument
 function adding(a:any) {
    return function(b:any){
      return function(c:any){
        return a + b +c
      }
    }
  }
  console.log("Currying",adding(1)(2)(3));
 // Currying
  // Closure
  // the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment)
  function MyName(){
    const name="rishu"
    function getName(){
      console.log("My name is",name);
    }
    getName()
  }
 MyName()
// Closure 2
  function MyNames(){
    const name="rishu chaudhary"
    function getName(){
      console.log("My name is",name);
    }
   return getName
  }
 let fn = MyNames()
fn();
 // Closure
}

}
