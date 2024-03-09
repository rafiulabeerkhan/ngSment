import { Component, OnInit } from '@angular/core';
import { OrderDetails } from 'src/app/Model/OrderDetails';
import { OrderDetailsService } from 'src/app/Service/order-details.service';

@Component({
  selector: 'app-order-details-list',
  templateUrl: './order-details-list.component.html',
  styleUrls: ['./order-details-list.component.scss']
})
export class OrderDetailsListComponent implements OnInit{
  constructor(private orderDetails: OrderDetailsService) {}
  OrderDetailsData: any = [];
  orderDetailsList: OrderDetails[] = [];

  ngOnInit(): void {
    
    this.orderDetails.getAll().subscribe((allData) => {
      console.log(allData);
      this.OrderDetailsData = allData;
      this.getAll();
    });
  }

  getAll() {
    this.orderDetails.getAll().subscribe({
      next: (res: any) => {
        this.orderDetailsList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }

  deleteById(id?: number) {
    if (id == null) {
      return;
    }
    this.orderDetails.deleteOrderDetailsById(id).subscribe({
      next: (res) => {
        console.log('Details Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

}
