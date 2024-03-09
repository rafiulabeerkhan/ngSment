import { Component, OnInit } from '@angular/core';
import { Order } from 'src/app/Model/Order';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit{
  constructor(private order: OrderGoodsService) {}
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
