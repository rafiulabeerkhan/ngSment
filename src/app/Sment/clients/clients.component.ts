import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/Model/Client';
import { ClientServiceService } from 'src/app/Service/client-service.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss']
})
export class ClientsComponent implements OnInit{

  ngOnInit(): void {
    this.client.getAll().subscribe((allData) => {
      console.log(allData);
      this.clientData = allData;
      this.getAll();
    });
  }
  constructor(private client: ClientServiceService) {}

  clientData: any = [];


  deleteClient(client_id: any) {
    this.client.deleteClientById(client_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }


  deleteById(id: number) {
    this.client.deleteClientById(id).subscribe({
      next: (res) => {
        console.log('Employee Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

  getAll() {
    this.client.getAll().subscribe({
      next: (res: any) => {
        this.ClientList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }

  // editClient: FormGroup = new FormGroup({
  //   clientId: new FormControl(''),
  //   clientName: new FormControl(''),
  //   designation: new FormControl(''),
  //   contactNo: new FormControl(''),
  //   officeAddress: new FormControl(''),
  //   orderInfo: new FormControl(''),
  //   material_id: new FormControl(''),
  //   product_id: new FormControl(''),
  //   quantity: new FormControl('')
  // });

  // editData: boolean = false;
  // edit(client: Client) {
  //   this.editData = true;
  //   this.editClient = new FormGroup({
  //     clientId: new FormControl(client.clientId),
  //     clientName: new FormControl(client.clientName),
  //     designation: new FormControl(client.designation),
  //     contactNo: new FormControl(client.contactNo),
  //     officeAddress: new FormControl(client.officeAddress),
  //     orderInfo: new FormControl(client.orderInfo),
  //     material_id: new FormControl(client.material_id),
  //     product_id: new FormControl(client.product_id),
  //     quantity: new FormControl(client.quantity),
  //   });
  // }
  ClientList: Client[] = [];

  delete(client: Client) {
    console.log('Delete call' + client);
    this.ClientList = this.ClientList.filter((item) => item !== client);
  }
   

}
