
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Order } from 'src/app/Model/Order';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit{
  constructor(private order: OrderGoodsService) { }
  OrderList: Order[] = [];
  message: boolean = false;
  ngOnInit(): void {
   
    
  }
  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addOrder.value);
    this.order.saveOrder(this.addOrder.value).subscribe((result) => {
      console.log("Data Saved!");

    });
  }

  addOrder: FormGroup = new FormGroup({
    order_id: new FormControl(''),
    details_id: new FormControl(''),
    totalQuantity: new FormControl(''),
    price: new FormControl(''),
    totalPrice: new FormControl(''),
    due: new FormControl(''),
    client_id: new FormControl(''),



  });


  
}
