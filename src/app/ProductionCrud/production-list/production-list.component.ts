import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Material } from 'src/app/Model/Material';
import { Production } from 'src/app/Model/Production';
import { Employees } from 'src/app/Model/employees';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';
import { MachineService } from 'src/app/Service/machine.service';
import { ProductionService } from 'src/app/Service/production.service';
import { RawMaterialService } from 'src/app/Service/raw-material.service';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.scss']
})
export class ProductionListComponent implements OnInit{
  constructor(private production: ProductionService,
    private employee: EmployeeServiceService,
    private material: RawMaterialService) { }
  productionData: any = [];
  productionList: Production[] = [];
  employeeList: Employees[] = [];
  materialList: Material[] = [];

  ngOnInit(): void {
    this.production.getAll().subscribe((allData) => {
      console.log(allData);
      this.productionData = allData;
      this.getAll();
    });
    this.employee.getAll().subscribe((res) => {
      this.productionData = res;
      this.getEmp();
    })
    this.material.getAll().subscribe((allData) =>{
      console.log(allData);
      this.productionData = allData;
      this.getMat();
    })

  }

  
  getAll() {
    this.production.getAll().subscribe({
      next: (res: any) => {
        this.productionList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }

  getMat(){
    this.material.getAll().subscribe({
      next: (res: any) =>{
        this.materialList = res;
      },
      error: (res: any)=>{
        console.log('Error '+ res);
        
      }
    })
  }
  getEmp(){
    this.employee.getAll().subscribe({
      next: (res: any) =>{
        this.employeeList = res;
      },
      error: (res: any)=>{
        console.log('Error '+ res);
        
      }
    })
  }


  deleteById(id?: number) {
    if (id == null) {
      return;
    }
    this.production.deleteProductionById(id).subscribe({
      next: (res) => {
        console.log('Production Details Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }





}
