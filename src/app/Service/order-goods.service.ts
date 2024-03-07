import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../Model/Order';

@Injectable({
  providedIn: 'root'
})
export class OrderGoodsService {

  url='http://localhost:8088/order';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(){
    return this.http.get(this.url+ "/getAll");
  }
  saveOrder (order: Order) {
    console.log(order);
  return this.http.post(this.url, order, this.httpOptions)
  }

  deleteOrderById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getOrderById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }
  updateOrderData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }
}
