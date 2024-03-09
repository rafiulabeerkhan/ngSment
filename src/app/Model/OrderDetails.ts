import { DatePipe } from "@angular/common";

export class OrderDetails{

    constructor ( public id?: number,
        public product_id?: number,
        public quantity?: number,
        public price?: number,
        public totalPrice?: number,
        public deliveryDate?: DatePipe,
      
        ){}
   
}