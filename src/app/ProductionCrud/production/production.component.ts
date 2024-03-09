import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Production } from 'src/app/Model/Production';
import { ProductionService } from 'src/app/Service/production.service';

@Component({
  selector: 'app-production',
  templateUrl: './production.component.html',
  styleUrls: ['./production.component.scss']
})
export class ProductionComponent implements OnInit{
  constructor(private production: ProductionService) { }
  productionList: Production[] = [];
  message: boolean = false;

  ngOnInit(): void {
  
  }

  removeMessage() {
    this.message = false;
  }

  onsubmit() {
    console.log(this.addProduction.value);
    this.production.saveProduction(this.addProduction.value).subscribe((result) => {
      console.log("Data Saved!");

    });
  }

  addProduction: FormGroup = new FormGroup({
    production_id: new FormControl(''),
    product_id: new FormControl(''),
    material_id: new FormControl(''),
    employee_id: new FormControl(''),
    status: new FormControl('')
  });

}
