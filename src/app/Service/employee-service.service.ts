import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employees } from '../Model/employees';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  url='http://localhost:8088/employee';

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getAll(){
    return this.http.get(this.url+ "/getAll");
  }


  saveData (employees: Employees) {
    console.log(employees);
  return this.http.post(this.url, employees, this.httpOptions)
  }


  deleteEmployeeById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getEmployeeById (id: any) {
    return this.http.get(this.url+"/"+ id);
  }

  updateEmployeeData(id: number, data:any) {
    return this.http.put(`${this.url}/${id}`, data);
   }

}
