import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

 
  url='http://localhost:8088/details';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(){
    return this.http.get(this.url+ "/getAll");
  }

  saveDetails (details: OrderDetailsService) {
    console.log(details);
  return this.http.post(this.url, details, this.httpOptions)
  }

  deleteOrderDetailsById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getOrderDetailsId (id: number) {
    return this.http.get(this.url+"/"+ id);
  }

  updateOrderDetailsData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }


}
