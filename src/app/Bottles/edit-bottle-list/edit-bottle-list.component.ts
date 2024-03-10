import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Products } from 'src/app/Model/Products';
import { AddProductsService } from 'src/app/Service/add-products.service';

@Component({
  selector: 'app-edit-bottle-list',
  templateUrl: './edit-bottle-list.component.html',
  styleUrls: ['./edit-bottle-list.component.scss']
})
export class EditBottleListComponent implements OnInit {

  constructor(
    private product: AddProductsService,
    private route: ActivatedRoute
  ) {}

  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["product_id"];
      console.log(this.id);
       this.getProductById(this.id);
       
      
    })
  }

  onSub() {
    console.log(this.editProducts.value);
    this.product.saveData(this.editProducts.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
    }


  editProducts: FormGroup = new FormGroup({
    productName: new FormControl(''),
    material_id: new FormControl(''),
    material_name: new FormControl(''),
    workOrder: new FormControl(''),
    weight: new FormControl('')

  });

  rawProduct!: Products;
  getProductById(id: number) {
    this.product.getProductById(id).subscribe({
      next: (res) => {
        this.rawProduct = res;
        this.editProducts.patchValue(this.rawProduct);
      },
      error: (res) => {
        console.log(res);
      },
    });
  }
}
