export class Invoice{

    constructor (
         public id?: number,
        public status?: string,
        public receiverName?: string,
        public receiverAddress?: string,
        public receiverItem?: string,
        public  quantity?: number,
        public  price?: number,
        public discount?: number,
        public grandTotal?: number,
        public dateTime?: Date,
        public production_id?: number,
 
        ){}
   
}