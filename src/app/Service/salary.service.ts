import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Salary } from '../Model/Salary';

@Injectable({
  providedIn: 'root'
})
export class SalaryService {
  url='http://localhost:8088/salary';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll(){
    return this.http.get(this.url+ "/getAll");
  }

  saveSalary (salary: Salary) {
    console.log(salary);
  return this.http.post(this.url, salary, this.httpOptions)
  }
  deleteSalaryById(id: number){
    return this.http.delete(this.url+"/"+id);
  }
  getSalaryById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }
  updateSalaryData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }
}
