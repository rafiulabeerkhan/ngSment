import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Client } from 'src/app/Model/Client';
import { ClientServiceService } from 'src/app/Service/client-service.service';

@Component({
  selector: 'app-client-lists',
  templateUrl: './client-lists.component.html',
  styleUrls: ['./client-lists.component.scss']
})
export class ClientListsComponent implements OnInit {
  constructor(private client: ClientServiceService) { }

  clientList: Client[] = [];
  message: boolean = false;

  ngOnInit(): void {

  }
  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addClient.value);
    this.client.saveData(this.addClient.value).subscribe((result) => {
      console.log("Data Saved!");

    });
  }
  addClient: FormGroup = new FormGroup({
    clientId: new FormControl(''),
    clientName: new FormControl(''),
    designation: new FormControl(''),
    contactNo: new FormControl(''),
    officeAddress: new FormControl(''),
    orderInfo: new FormControl(''),
    material_id: new FormControl(''),
    product_id: new FormControl(''),
    quantity: new FormControl('')


  });
}
