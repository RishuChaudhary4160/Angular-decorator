import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  data: [{
    id: 1,
    name: "Rishu",
    age: 22
  },
    {
      id: 1,
      name: "Test",
      age: 22
    }] | undefined
  exclusive = new Subject<boolean>()
  StateName = new Subject<string>()
  getProductsData() {
    return [
      {
        id: 1,
        name: "Mobile",
        Brand: "Apple"
      },
      {
        id: 2,
        name: "Mobile",
        Brand: "Nokia"
      }
    ]
  }

  getUserData() {
    let apiUrl = "https://dummyjson.com/users"
    return this.http.get(apiUrl)
  }
}
