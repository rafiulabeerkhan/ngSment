import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Salary } from 'src/app/Model/Salary';
import { SalaryService } from 'src/app/Service/salary.service';

@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit{

  constructor(private salary: SalaryService){}
  SalaryList: Salary[]=[];
  message: boolean=false;
  ngOnInit(): void {
  
  }

  removeMessage(){
    this.message=false;
  }
  addSalary: FormGroup = new FormGroup({
    employee_id: new FormControl(''),
    designation: new FormControl(''),
    paymentType: new FormControl(''),
    amount: new FormControl(''),
    overTime: new FormControl(''),
    bonus: new FormControl(''),
    totalAmount: new FormControl(''),

  });

  onsubmit(){
    console.log(this.addSalary.value);
    this.salary.saveSalary(this.addSalary.value).subscribe((result)=>{
      console.log("Data Saved!");
    });
    
  }

}
