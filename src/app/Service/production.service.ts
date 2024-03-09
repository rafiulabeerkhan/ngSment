import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Production } from '../Model/Production';

@Injectable({
  providedIn: 'root'
})
export class ProductionService {
  url='http://localhost:8088/production';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(){
    return this.http.get(this.url+ "/getAll");
  }
  saveProduction (production: Production) {
    console.log(production);
  return this.http.post(this.url, production, this.httpOptions)
  }

  deleteProductionById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getProductionById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }

  updateProductionData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }
}
