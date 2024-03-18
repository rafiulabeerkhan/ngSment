import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/Client';
import { Material } from 'src/app/Model/Material';
import { Order } from 'src/app/Model/Order';
import { ClientServiceService } from 'src/app/Service/client-service.service';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';
import { RawMaterialService } from 'src/app/Service/raw-material.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{
  constructor(private order: OrderGoodsService,
   ) {}
  OrderData: any = [];
  orderList: Order[] = [];
 
 



  ngOnInit(): void {
    this.order.getAll().subscribe((allData) => {
      console.log(allData);
      this.OrderData = allData;
      this.getAll();
    });

  }


  getAll() {
    this.order.getAll().subscribe({
      next: (res: any) => {
        this.orderList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }


  deleteById(id?: number) {
    if(id == null) {
      return;
    }
    this.order.deleteOrderById(id).subscribe({
      next: (res) => {
        console.log('Order Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

  

}
