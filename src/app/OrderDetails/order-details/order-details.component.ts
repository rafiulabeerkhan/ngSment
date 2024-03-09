import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { OrderDetails } from 'src/app/Model/OrderDetails';
import { OrderDetailsService } from 'src/app/Service/order-details.service';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  constructor(private orderDetails: OrderDetailsService) { }
  OrderDetailsList:  OrderDetails[] = [];
  message: boolean = false;

  ngOnInit(): void {
   
  }

  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addOrderDetails.value);
    this.orderDetails.saveDetails(this.addOrderDetails.value).subscribe((result) => {
      console.log("Data Saved!");

    });
  }

  addOrderDetails: FormGroup = new FormGroup({
    id: new FormControl(''),
    product_id: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    totalPrice: new FormControl(''),
    deliveryDate: new FormControl(''),
  



  });

}
