import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invoice } from '../Model/Invoice';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  url='http://localhost:8088/invoice';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(){
    return this.http.get(this.url+ "/getAll");
  }

  saveInvoice (invoice: Invoice) {
    console.log(invoice);
  return this.http.post(this.url, invoice, this.httpOptions)
  }

  deleteInvoiceById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getInvoiceById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }
  updateInvoiceData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }

}
