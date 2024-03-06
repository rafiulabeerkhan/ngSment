import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Material } from 'src/app/Model/Material';
import { RawMaterialService } from 'src/app/Service/raw-material.service';

@Component({
  selector: 'app-edit-material-list',
  templateUrl: './edit-material-list.component.html',
  styleUrls: ['./edit-material-list.component.scss']
})
export class EditMaterialListComponent implements OnInit{
  constructor(
    private material: RawMaterialService,
    private route: ActivatedRoute
  ) {}

  id!: number;

  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["material_id"];
      console.log(this.id);
       this.getMaterialById(this.id);
       
      
    })
  }

  onSub() {
    console.log(this.editMaterial.value);
    this.material.saveMaterial(this.editMaterial.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
    }

    editMaterial: FormGroup = new FormGroup({
      material_id: new FormControl(''),
      name: new FormControl(''),
      country: new FormControl(''),
      quantity: new FormControl(''),
      payment: new FormControl(''),
  
    });

    rawMaterial!: Material;
    getMaterialById(id: number) {
      this.material.getMaterialById(id).subscribe({
        next: (res) => {
          this.rawMaterial = res;
          this.editMaterial.patchValue(this.rawMaterial);
        },
        error: (res) => {
          console.log(res);
        },
      });
    }
}
