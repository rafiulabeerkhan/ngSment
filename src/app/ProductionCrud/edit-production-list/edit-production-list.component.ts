import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Production } from 'src/app/Model/Production';
import { ProductionService } from 'src/app/Service/production.service';

@Component({
  selector: 'app-edit-production-list',
  templateUrl: './edit-production-list.component.html',
  styleUrls: ['./edit-production-list.component.scss']
})
export class EditProductionListComponent implements OnInit{
  constructor(
    private production: ProductionService,
    private route: ActivatedRoute
  ) {}

  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["production_id"];
      console.log(this.id);
       this.getProductionById(this.id);
       
      
    })
  }

  onSub() {
    console.log(this.editProduction.value);
    this.production.saveProduction(this.editProduction.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
    }

    
  editProduction: FormGroup = new FormGroup({
    production_id: new FormControl(''),
    product_id: new FormControl(''),
    material_id: new FormControl(''),
    employee_id: new FormControl(''),
    status: new FormControl('')
  });

  rawProduction!: Production;
  getProductionById(id: number) {
    this.production.getProductionById(id).subscribe({
      next: (res) => {
        this.rawProduction = res;
        this.editProduction.patchValue(this.rawProduction);
      },
      error: (res) => {
        console.log(res);
      },
    });
  }

}
