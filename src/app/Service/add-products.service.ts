import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Products } from '../Model/Products';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class AddProductsService {
  ProductUrl='http://localhost:8088/products';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(): Observable<any>{
    return this.http.get(this.ProductUrl+ "/getAll");
  }
  saveData (products: Products) {
    console.log(products);
  return this.http.post(this.ProductUrl, products, this.httpOptions)
  }
  deleteProductById(id: number){
    return this.http.delete(this.ProductUrl+"/"+id);
  }
  getProductById (id: number) {
    return this.http.get(this.ProductUrl+"/"+ id);
  }
  updateProductData(id: number, data:number) {
    return this.http.put(`${this.ProductUrl}/${id}`, data);
   }

}
