export class Order{

    constructor ( public orderId?: number,
        public totalQuantity?: number,
        public price?: number,
        public totalPrice?: number,
        public due?: number,
        // public client_id?: string,
        ){}
   
}