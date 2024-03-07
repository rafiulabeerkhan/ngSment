import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Invoice } from 'src/app/Model/Invoice';
import { InvoiceService } from 'src/app/Service/invoice.service';

@Component({
  selector: 'app-edit-invoice',
  templateUrl: './edit-invoice.component.html',
  styleUrls: ['./edit-invoice.component.scss']
})
export class EditInvoiceComponent implements OnInit{
  constructor(
    private invoice: InvoiceService,
    private route: ActivatedRoute
  ) {}

  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["id"];
      console.log(this.id);
       this.getInvoiceById(this.id);
       
      
    })
  }
  onSub() {
    console.log(this.editInvoice.value);
    this.invoice.saveInvoice(this.editInvoice.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
    }

  editInvoice: FormGroup = new FormGroup({
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

  rawInvoice!: Invoice;
  getInvoiceById(id: number) {
    this.invoice.getInvoiceById(id).subscribe({
      next: (res) => {
        this.rawInvoice = res;
        this.editInvoice.patchValue(this.rawInvoice);
      },
      error: (res) => {
        console.log(res);
      },
    });
  }

}
