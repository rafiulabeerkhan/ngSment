
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { Order } from 'src/app/Model/Order';
import { Products } from 'src/app/Model/Products';
import { AddProductsService } from 'src/app/Service/add-products.service';
import { ClientServiceService } from 'src/app/Service/client-service.service';
import { OrderGoodsService } from 'src/app/Service/order-goods.service';


@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {


  addOrderDetails!: FormGroup;
  constructor(private order: OrderGoodsService,
    private productService: AddProductsService,
    private clientService: ClientServiceService,
    private router: Router) { }
  OrderList: Order[] = [];
  productList: Products[] = [];
  clientList: any[] = [];

  message: boolean = false;
  ngOnInit(): void {
    this.productService.getAll().subscribe(res => {
      this.productList = res;
      console.log(this.productList);
      this.clientService.getAll().subscribe(res => {
        this.clientList = res;
        console.log(this.clientList);

      })

    })

  }
  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log('before ---------------------', this.addOrder.value);

    this.addOrder.value.productEntity = { 'product_id': this.addOrder.value.productEntity }
    this.addOrder.value.clientEntity = { 'clientId': this.addOrder.value.clientEntity };

    this.order.saveOrder(this.addOrder.value).subscribe((result) => {
      console.log("Data Saved!");
      this.router.navigate(["/orderList"])
    });
  }

  addOrder: FormGroup = new FormGroup({
    order_id: new FormControl(''),
    totalQuantity: new FormControl(''),
    price: new FormControl(''),
    totalPrice: new FormControl(''),
    due: new FormControl(''),
    client_id: new FormControl(''),
    productEntity: new FormControl(),
    clientEntity: new FormControl()
  });



}
