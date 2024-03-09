export class Order{

    constructor ( public id?: number,
        public details_id?: number,
        public totalQuantity?: number,
        public price?: number,
        public totalPrice?: number,
        public due?: number,
        public client_id?: number,
        ){}
   
}