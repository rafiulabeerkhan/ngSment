import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Machine } from 'src/app/Model/Machine';
import { MachineService } from 'src/app/Service/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  constructor(private machine: MachineService) { }
  machineList: Machine[] = [];
  message: boolean = false;

  ngOnInit(): void {
  
  }

  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addMachine.value);
    this.machine.saveMachine(this.addMachine.value).subscribe((result) => {
      console.log("Data Saved!");

    });
  }

  addMachine: FormGroup = new FormGroup({
    machine_id: new FormControl(''),
    country: new FormControl(''),
    status: new FormControl(''),
    pmProduction: new FormControl(''),
    employee_id: new FormControl('')
  });

}
