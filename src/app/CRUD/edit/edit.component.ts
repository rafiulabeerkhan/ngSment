import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Employees } from 'src/app/Model/employees';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
EmployeeList: Employees[] = [];



onSub() {
console.log(this.EditEmployee.value);
this.service.saveData(this.EditEmployee.value).subscribe((result) =>{
  console.log("Data Saved");
  
})

}


  constructor(
    private service: EmployeeServiceService,
    private route: ActivatedRoute
  ) {}

  emp!: Employees;
  getEmployeeById(id: number) {
    this.service.getEmployeeById(id).subscribe({
      next: (res) => {
        this.emp = res;
        this.EditEmployee.patchValue(this.emp);
      },
      error: (res) => {
        console.log(res);
      },
    });
  }


  id!: number;
  ngOnInit(): void {


this.route.params.subscribe((param)=>{
  this.id = param["employeeID"];
  console.log(this.id);
   this.getEmployeeById(this.id);
   
  
})




  //  this.id = this.route.snapshot.params['employeeID'];
  //  console.log(this.id);

  //  this.getEmployeeById(this.id);
   
  }



  EditEmployee: FormGroup = new FormGroup({
    employeeID: new FormControl(''),
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    age: new FormControl(''),
    address: new FormControl(''),
    nid: new FormControl(''),
    birthDate: new FormControl(''),
    shift: new FormControl(''),
    workingHour: new FormControl(''),
    joiningDate: new FormControl(''),
  });
}
