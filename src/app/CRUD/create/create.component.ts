import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employees } from 'src/app/Model/employees';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit{

  constructor(private employee: EmployeeServiceService, private router: Router){}

  EmployeeList: Employees[]=[];
  message: boolean=false;

  ngOnInit(): void {
    
  }
  removeMessage(){
    this.message=false;
  }

onsubmit(){
  console.log(this.addEmployee.value);
  this.employee.saveData(this.addEmployee.value).subscribe((result)=>{
    console.log("Data Saved!");
    this.router.navigate(["/list"])
  });
  
}

  addEmployee: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    nid: new FormControl(''),
    birthDate: new FormControl(''),
    shift: new FormControl('night'),
    workingHour: new FormControl(''),
    joiningDate: new FormControl(''),
   
  });

}
