import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Employees } from 'src/app/Model/employees';
import { EmployeeServiceService } from 'src/app/Service/employee-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  // empForDelete!: Employees;
  // employeeName="";
  // employeeList!: Employees[];
  // deletePopup(employee: Employees){
  //   this.empForDelete = employee;
  // this.employeeName = this.empForDelete.firstName;
  // console.log(employee.firstName);
  // }

  ngOnInit(): void {
    this.employees.getAll().subscribe((allData) => {
      console.log(allData);
      this.employeeData = allData;
      this.getAll();
    });
  }

  constructor(private employees: EmployeeServiceService) {}

  employeeData: any = [];
  empList: Employees[] = [];
  // ngOnInit(): void {
  //   this.employees.getAll().subscribe((allData) => {
  //     console.log(allData);
  //     this.employeeData = allData;
  //   });
  // }

  // deleteById(employeeId: any){
  //   this.employees.deleteEmployeeById(employeeId).subscribe({
  //     next: res=>{
  //       console.log("Employee Deleted: ID"+ employeeId);

  //     },
  //     error: res=>{
  //       console.log("Sorry! Employee couldn't delete");

  //     }
  //   })

  // }

  // delete(){
  //   this.employees.deleteEmployeeById(this.empForDelete.employeeId).subscribe({

  //   })
  // }

  deleteEmployee(employee_id: any) {
    this.employees.deleteEmployeeById(employee_id).subscribe((result) => {
      console.log(result);
      this.ngOnInit();
    });
  }

  deleteById(id: number) {
    this.employees.deleteEmployeeById(id).subscribe({
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
    this.employees.getAll().subscribe({
      next: (res: any) => {
        this.empList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }
  editEmployee: FormGroup = new FormGroup({
    employeeId: new FormControl(''),
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

  editData: boolean = false;
  edit(employee: Employees) {
    this.editData = true;
    this.editEmployee = new FormGroup({
      firstName: new FormControl(employee.firstName),
      lastName: new FormControl(employee.lastName),
      age: new FormControl(employee.age),
      address: new FormControl(employee.address),
      nid: new FormControl(employee.nid),
      birthDate: new FormControl(employee.birthDate),
      shift: new FormControl(employee.shift),
      workingHour: new FormControl(employee.workingHour),
      joiningDate: new FormControl(employee.joiningDate),
    });
  }
  EmployeeList: Employees[] = [];
  delete(employee: Employees) {
    console.log('Delete call' + employee);
    this.EmployeeList = this.EmployeeList.filter((item) => item !== employee);
  }
}
