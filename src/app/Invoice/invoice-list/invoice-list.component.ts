import { Component, OnInit } from '@angular/core';
import { Invoice } from 'src/app/Model/Invoice';
import { InvoiceService } from 'src/app/Service/invoice.service';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.scss']
})
export class InvoiceListComponent implements OnInit {
  constructor(private invoice: InvoiceService) { }
  InvoiceData: any = [];
  invoiceList: Invoice[] = [];

  ngOnInit(): void {
    this.invoice.getAll().subscribe((allData) => {
      console.log(allData);
      this.InvoiceData = allData;
      this.getAll();
    });
  }

  getAll() {
    this.invoice.getAll().subscribe({
      next: (res: any) => {
        this.invoiceList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }

  deleteById(id?: number) {
    if (id == null) {
      return;
    }
    this.invoice.deleteInvoiceById(id).subscribe({
      next: (res) => {
        console.log('Invoice Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

  print(id: number){
    if(id == -1){
      return;
    }
    let url = `http://localhost:8088/invoice/pdf/${id}`;
    window.open(url, "_blank")
  }

}
