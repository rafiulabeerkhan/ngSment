import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Invoice } from 'src/app/Model/Invoice';
import { InvoiceService } from 'src/app/Service/invoice.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {


  constructor(private invoice: InvoiceService,
    private router: Router){}
  InvoiceList: Invoice[]=[];
  message: boolean=false;

  ngOnInit(): void {

  }
  removeMessage(){
    this.message=false;
  }

  addInvoice: FormGroup = new FormGroup({
    id: new FormControl(''),
    status: new FormControl(''),
    receiverName: new FormControl(''),
    receiverAddress: new FormControl(''),
    receiverItem: new FormControl(''),
    quantity: new FormControl(''),
    price: new FormControl(''),
    discount: new FormControl(''),
    grandTotal: new FormControl(''),
    dateTime: new FormControl(''),
    production_id: new FormControl('')

  });

  onsubmit(){
    console.log(this.addInvoice.value);
    this.invoice.saveInvoice(this.addInvoice.value).subscribe((result)=>{
      console.log("Data Saved!");
    });
    this.router.navigate(["/invoiceList"])
    
  }

 

}
