import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Machine } from '../Model/Machine';

@Injectable({
  providedIn: 'root'
})
export class MachineService {
  url='http://localhost:8088/machine';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll(){
    return this.http.get(this.url+ "/getAll");
  }

  saveMachine (machine: Machine) {
    console.log(machine);
  return this.http.post(this.url, machine, this.httpOptions)
  }

  deleteMachineById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getMachineById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }

  updateMachineData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }

}
