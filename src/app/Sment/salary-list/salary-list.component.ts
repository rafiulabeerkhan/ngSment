import { Component, OnInit } from '@angular/core';
import { Salary } from 'src/app/Model/Salary';
import { SalaryService } from 'src/app/Service/salary.service';

@Component({
  selector: 'app-salary-list',
  templateUrl: './salary-list.component.html',
  styleUrls: ['./salary-list.component.scss']
})
export class SalaryListComponent implements OnInit{
  constructor(private salary: SalaryService) {}
  SalaryData: any = [];
  salaryList: Salary[] = [];

  ngOnInit(): void {
    this.salary.getAll().subscribe((allData) => {
      console.log(allData);
      this.SalaryData = allData;
      this.getAll();
    });
  }

  getAll() {
    this.salary.getAll().subscribe({
      next: (res: any) => {
        this.salaryList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }

  deleteById(id?: number) {
    if(id == null) {
      return;
    }
    this.salary.deleteSalaryById(id).subscribe({
      next: (res) => {
        console.log('Salary Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }


}
