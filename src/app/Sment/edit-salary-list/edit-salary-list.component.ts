import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Salary } from 'src/app/Model/Salary';
import { SalaryService } from 'src/app/Service/salary.service';

@Component({
  selector: 'app-edit-salary-list',
  templateUrl: './edit-salary-list.component.html',
  styleUrls: ['./edit-salary-list.component.scss']
})
export class EditSalaryListComponent implements OnInit{
  constructor(
    private salary: SalaryService,
    private route: ActivatedRoute
  ) {}
  id!: number;


  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["employee_id"];
      console.log(this.id);
       this.getSalaryById(this.id);
       
      
    })
  }
  onSub() {
    console.log(this.editSalary.value);
    this.salary.saveSalary(this.editSalary.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
    }

    editSalary: FormGroup = new FormGroup({
      employee_id: new FormControl(''),
      designation: new FormControl(''),
      paymentType: new FormControl(''),
      amount: new FormControl(''),
      overTime: new FormControl(''),
      bonus: new FormControl(''),
      totalAmount: new FormControl(''),
  
    });

    rawSalary!: Salary;
    getSalaryById(id: number) {
      this.salary.getSalaryById(id).subscribe({
        next: (res) => {
          this.rawSalary = res;
          this.editSalary.patchValue(this.rawSalary);
        },
        error: (res) => {
          console.log(res);
        },
      });
    }


}
