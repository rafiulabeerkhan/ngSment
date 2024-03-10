import { Component } from '@angular/core';
import { Products } from 'src/app/Model/Products';
import { AddProductsService } from 'src/app/Service/add-products.service';

@Component({
  selector: 'app-bottles-list',
  templateUrl: './bottles-list.component.html',
  styleUrls: ['./bottles-list.component.scss']
})
export class BottlesListComponent {
  constructor(private product: AddProductsService) { }

  productData: any = [];
  productList: Products[] = [];

  ngOnInit(): void {
    this.product.getAll().subscribe((allData) => {
      console.log(allData);
      this.productData = allData;
      this.getAll();
    });
  }

  getAll() {
    this.product.getAll().subscribe({
      next: (res: any) => {
        this.productList = res;
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
    this.product.deleteProductById(id).subscribe({
      next: (res) => {
        console.log('Product Details Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

}
