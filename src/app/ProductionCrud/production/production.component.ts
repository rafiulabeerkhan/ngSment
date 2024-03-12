import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/Model/Order';
import { Production } from 'src/app/Model/Production';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';
import { ProductionService } from 'src/app/Service/production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit{
  constructor(private production: ProductionService,
    private order: OrderGoodsService) { }
  productionList: Production[] = [];
  OrderList: Order[] = [];
  message: boolean = false;

  ngOnInit(): void {
  this.order.getAll().subscribe(res =>{
    this.OrderList = res;
    console.log(this.OrderList);
    
  })
  }

  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addProduction.value);
    this.production.saveProduction(this.addProduction.value).subscribe((result) => {
      console.log("Data Saved!");

    });
    this.addProduction.value.orderEntity = {'id': this.addProduction.value.orderEntity}
  }

  addProduction: FormGroup = new FormGroup({
    production_id: new FormControl(''),
    order_id: new FormControl(''),
    material_id: new FormControl(''),
    employee_id: new FormControl(''),
    machine_id: new FormControl(''),
    status: new FormControl(''),
    orderEntity: new FormControl(''),
  });

}
