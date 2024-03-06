import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Material } from 'src/app/Model/Material';
import { RawMaterialService } from 'src/app/Service/raw-material.service';

@Component({
  selector: 'app-raw-material',
  templateUrl: './raw-material.component.html',
  styleUrls: ['./raw-material.component.scss']
})
export class RawMaterialComponent implements OnInit{

  constructor(private material: RawMaterialService){}
  MaterialList: Material[]=[];
  message: boolean=false;

  ngOnInit(): void {
    
  }

  removeMessage(){
    this.message=false;
  }

  addMaterial: FormGroup = new FormGroup({
    material_id: new FormControl(''),
    name: new FormControl(''),
    country: new FormControl(''),
    quantity: new FormControl(''),
    payment: new FormControl(''),

  });

  onsubmit(){
    console.log(this.addMaterial.value);
    this.material.saveMaterial(this.addMaterial.value).subscribe((result)=>{
      console.log("Data Saved!");
      
    });
    
  }

}
