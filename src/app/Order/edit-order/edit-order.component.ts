import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Order } from 'src/app/Model/Order';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';

@Component({
  selector: 'app-edit-order',
  templateUrl: './edit-order.component.html',
  styleUrls: ['./edit-order.component.scss']
})
export class EditOrderComponent implements OnInit{

  constructor(
    private order: OrderGoodsService,
    private route: ActivatedRoute
  ) {}
  id!: number;


  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["order_id"];
      console.log(this.id);
       this.getOrderById(this.id);
       
      
    })
  }


  onSub() {
    console.log(this.editOrder.value);
    this.order.saveOrder(this.editOrder.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
  }
    editOrder: FormGroup = new FormGroup({
      order_id: new FormControl(''),
      totalQuantity: new FormControl(''),
      price: new FormControl(''),
      totalPrice: new FormControl(''),
      due: new FormControl(''),
      client_id: new FormControl(''),
    });
    

    rawOrder!: Order;
    getOrderById(id: number) {
      this.order.getOrderById(id).subscribe({
        next: (res) => {
          this.rawOrder = res;
          this.editOrder.patchValue(this.rawOrder);
        },
        error: (res) => {
          console.log(res);
        },
      });
    }

}
