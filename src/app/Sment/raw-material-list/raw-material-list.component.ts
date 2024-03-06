import { Component, OnInit } from '@angular/core';
import { Material } from 'src/app/Model/Material';
import { RawMaterialService } from 'src/app/Service/raw-material.service';

@Component({
  selector: 'app-raw-material-list',
  templateUrl: './raw-material-list.component.html',
  styleUrls: ['./raw-material-list.component.scss']
})
export class RawMaterialListComponent implements OnInit{
  constructor(private material: RawMaterialService) {}
  MaterialData: any = [];
  materialList: Material[] = [];
  ngOnInit(): void {
    this.material.getAll().subscribe((allData) => {
      console.log(allData);
      this.MaterialData = allData;
      this.getAll();
    });
  }

  getAll() {
    this.material.getAll().subscribe({
      next: (res: any) => {
        this.materialList = res;
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
    this.material.deleteMaterialById(id).subscribe({
      next: (res) => {
        console.log('Material Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

}
