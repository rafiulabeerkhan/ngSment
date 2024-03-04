import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Client } from '../Model/Client';

@Injectable({
  providedIn: 'root'
})
export class ClientServiceService {
  url='http://localhost:8088/client';
  constructor(private http: HttpClient) { }

  
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(){
    return this.http.get(this.url+ "/getAll");
  }
  saveData (client: Client) {
    console.log(client);
  return this.http.post(this.url, client, this.httpOptions)
  }
  deleteClientById(id: number){
    return this.http.delete(this.url+"/"+id);
  }
  getClientById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }
  updateClientData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }
}
