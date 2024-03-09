import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Production } from 'src/app/Model/Production';
import { ProductionService } from 'src/app/Service/production.service';

@Component({
  selector: 'app-production-list',
  templateUrl: './production-list.component.html',
  styleUrls: ['./production-list.component.scss']
})
export class ProductionListComponent implements OnInit{
  constructor(private production: ProductionService) { }
  productionData: any = [];
  productionList: Production[] = [];

  ngOnInit(): void {
    this.production.getAll().subscribe((allData) => {
      console.log(allData);
      this.productionData = allData;
      this.getAll();
    });
  }

  
  getAll() {
    this.production.getAll().subscribe({
      next: (res: any) => {
        this.productionList = res;
      },
      error: (res: any) => {
        console.log('Error' + res);
      },
    });
  }

  deleteById(id?: number) {
    if (id == null) {
      return;
    }
    this.production.deleteProductionById(id).subscribe({
      next: (res) => {
        console.log('Production Details Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }





}
