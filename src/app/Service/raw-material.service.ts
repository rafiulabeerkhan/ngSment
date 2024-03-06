import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Material } from '../Model/Material';

@Injectable({
  providedIn: 'root'
})
export class RawMaterialService {
  url='http://localhost:8088/material';
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  getAll(){
    return this.http.get(this.url+ "/getAll");
  }

  saveMaterial (material: Material) {
    console.log(material);
  return this.http.post(this.url, material, this.httpOptions)
  }

  deleteMaterialById(id: number){
    return this.http.delete(this.url+"/"+id);
  }

  getMaterialById (id: number) {
    return this.http.get(this.url+"/"+ id);
  }
  updateMaterialData(id: number, data:number) {
    return this.http.put(`${this.url}/${id}`, data);
   }

}
