import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Machine } from 'src/app/Model/Machine';
import { Material } from 'src/app/Model/Material';
import { Order } from 'src/app/Model/Order';
import { Production } from 'src/app/Model/Production';
import { Employees } from 'src/app/Model/employees';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';
import { MachineService } from 'src/app/Service/machine.service';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';
import { ProductionService } from 'src/app/Service/production.service';
import { RawMaterialService } from 'src/app/Service/raw-material.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss'],
})
export class ProductionComponent implements OnInit {
  constructor(
    private production: ProductionService,
    private order: OrderGoodsService,
    private materialService: RawMaterialService,
    private employeeService: EmployeeServiceService,
    private machineService: MachineService,
    private router: Router
  ) {}
  productionList: Production[] = [];
  OrderList: Order[] = [];
  materialList: Material[] = [];
  employeeList: Employees[] = [];
  machineList: Machine[] = [];
  message: boolean = false;

  ngOnInit(): void {
    this.order.getAll().subscribe((res) => {
      this.OrderList = res;
      console.log(this.OrderList);
    })
    this.materialService.getAll().subscribe(res => {
      this.materialList = res;
    })
    
    this.employeeService.getAll().subscribe(res => {
      this.employeeList = res;

    })
    this.machineService.getAll().subscribe(res => {
      this.machineList = res;
    })
  }

  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addProduction.value);
    this.production
      .saveProduction(this.addProduction.value)
      .subscribe((result) => {
        console.log('Data Saved!');
        this.router.navigate(['/productionList']);
      });
    this.addProduction.value.orderEntity = {
      id: this.addProduction.value.orderEntity,
    }
    this.addProduction.value.materialEntity = {'material_id' : this.addProduction.value.materialEntity}
    this.addProduction.value.Employees = {'employeeID' : this.addProduction.value.Employees}
    this.addProduction.value.machineEntity = {'machine_id' : this.addProduction.value.machineEntity}
  }

  addProduction: FormGroup = new FormGroup({
    production_id: new FormControl(''),
    order_id: new FormControl(''),
    material_id: new FormControl(''),
    employee_id: new FormControl(''),
    machine_id: new FormControl(''),
    status: new FormControl(''),
    orderEntity: new FormControl(''),
    materialEntity: new FormControl(),
    Employees: new FormControl(),
    machineEntity: new FormControl(),
  });
}
