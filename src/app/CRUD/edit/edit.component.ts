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
  public id!: number;
  constructor(
    private employees: EmployeeServiceService,
    private router: ActivatedRoute
  ) {
    this.id = this.router.snapshot.params['employeeId'];
  }
  EmployeeList: Employees[] = [];

  message: boolean = false;

  ngOnInit(): void {
    this.employees
      .getEmployeeById(this.router.snapshot.params['employeeId'])
      .subscribe((result: any) => {
        this.editEmployee = new FormGroup({
          firstName: new FormControl('firstName'),
          lastName: new FormControl('lastName'),
          age: new FormControl('age'),
          address: new FormControl('address'),
          nid: new FormControl('nid'),
          birthDate: new FormControl('birthDate'),
          shift: new FormControl('shift'),
          workingHour: new FormControl('workingHour'),
          joiningDate: new FormControl('joiningDate'),
        });
      });
  }
  removeMessage() {
    this.message = false;
  }

  updateEmployee() {
    this.employees
      .updateEmployeeData(
        this.router.snapshot.params['employeeId'],
        this.editEmployee.value
      )
      .subscribe((result) => {
        this.message = true;
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

  onSub() {
    if (!this.editData) {
      console.log(this.editEmployee.value);
      this.EmployeeList.push(this.editEmployee.value);
    } else {
      for (let i = 0; i < this.EmployeeList.length; i++) {
        if (
          this.EmployeeList[i].firstName === this.editEmployee.value.firstName
        ) {
          this.EmployeeList[i] = this.editEmployee.value;
        }
      }
      this.editEmployee = new FormGroup({
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
    console.log(this.editEmployee.value);
    this.clear();
  }

  editData: boolean = false;
  clear() {
    this.editEmployee = new FormGroup({
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
    this.editData = false;
  }

  delete(employee: Employees) {
    console.log('Delete call' + employee);
    this.EmployeeList = this.EmployeeList.filter((item) => item !== employee);
  }
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
}
