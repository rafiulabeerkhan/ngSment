import { Component } from '@angular/core';
import { ClientServiceService } from 'src/app/Service/client-service.service';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';
import { MachineService } from 'src/app/Service/machine.service';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {
  machineCount: any = 0;
  orderCount: any = 0;
  clientCount: any = 0;
  employeeCount: any = 0;

  constructor(private machine: MachineService, 
    private order: OrderGoodsService,
    private client: ClientServiceService,
    private employee: EmployeeServiceService ){


    this.machineC();
    this.liveOrder();
    this.liveClient();
    this.liveEmployees();


  }


machineC(){
this.machine.countMachine().subscribe(res => {
  this.machineCount = res;
  console.log();
  
})
}

liveOrder(){
  this.order.countOrder().subscribe(res => {
    this.orderCount = res;
  })
}

liveClient(){
this.client.countClient().subscribe(res => {
  this.clientCount = res;
})
}
liveEmployees(){
  this.employee.countEmployees().subscribe(res => {
    this.employeeCount = res;
  })
}
}
