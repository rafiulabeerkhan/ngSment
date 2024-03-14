import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Machine } from 'src/app/Model/Machine';
import { Employees } from 'src/app/Model/employees';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';
import { MachineService } from 'src/app/Service/machine.service';

@Component({
  selector: 'app-machines',
  templateUrl: './machines.component.html',
  styleUrls: ['./machines.component.scss']
})
export class MachinesComponent implements OnInit {
  constructor(private machine: MachineService, 
    private router: Router,
    private employeeService: EmployeeServiceService) { }
  machineList: Machine[] = [];
  employeeList: Employees[] = [];
  message: boolean = false;

  ngOnInit(): void {
    this.employeeService.getAll().subscribe(res => {
      this.employeeList = res;
     })
  }

  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addMachine.value);
    this.machine.saveMachine(this.addMachine.value).subscribe((result) => {
      console.log("Data Saved!");
      this.router.navigate(["/machineList"])
      this.addMachine.value.Employees = {'employeeID' : this.addMachine.value.Employees}


    });
  }

  addMachine: FormGroup = new FormGroup({
    machine_id: new FormControl(''),
    country: new FormControl(''),
    status: new FormControl(''),
    pmProduction: new FormControl(''),
    employee_id: new FormControl(''),
    Employees: new FormControl(''),
  });

}
