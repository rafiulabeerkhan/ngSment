import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Products } from 'src/app/Model/Products';
import { AddProductsService } from 'src/app/Service/add-products.service';
import { FileUploadforbottleService } from 'src/app/Service/file-uploadforbottle.service';

@Component({
  selector: 'app-add-bottles',
  templateUrl: './add-bottles.component.html',
  styleUrls: ['./add-bottles.component.scss']
})
export class AddBottlesComponent implements OnInit {

  selectedFiles?: FileList;
  progressInfos: any[] = [];
  message: string[] = [];

  fileInfos?: Observable<any>;

  constructor(private uploadService: FileUploadforbottleService, 
    private product: AddProductsService,
    private route: Router) { }


  ngOnInit(): void {
    this.fileInfos = this.uploadService.getFiles();

  }

  selectFiles(event: any): void {
    this.message = [];
    this.progressInfos = [];
    this.selectedFiles = event.target.files;
  }

  upload(idx: number, file: File): void {
    this.progressInfos[idx] = { value: 0, fileName: file.name };

    if (file) {
      this.uploadService.upload(file).subscribe({
        next: (event: any) => {
          if (event.type === HttpEventType.UploadProgress) {
            this.progressInfos[idx].value = Math.round(100 * event.loaded / event.total);
          } else if (event instanceof HttpResponse) {
            const msg = file.name + ": Successful!";
            this.message.push(msg);
            this.fileInfos = this.uploadService.getFiles();
          }
        },
        error: (err: any) => {
          this.progressInfos[idx].value = 0;
          let msg = file.name + ": Failed!";

          if (err.error && err.error.message) {
            msg += " " + err.error.message;
          }

          this.message.push(msg);
          this.fileInfos = this.uploadService.getFiles();
        }
      });
    }
  }


  uploadFiles(): void {
    this.message = [];

    if (this.selectedFiles) {
      for (let i = 0; i < this.selectedFiles.length; i++) {
        this.upload(i, this.selectedFiles[i]);
      }
    }
    console.log(this.addProducts.value);
    this.product.saveData(this.addProducts.value).subscribe((result) => {
      console.log("Data Saved!");
this.route.navigate(["/bottleList"])
    });
  }



  productList: Products[] = [];
  messages: boolean = false;

  removeMessage() {
    this.messages = false;
  }

  // onsubmit() {
  //   console.log(this.addProducts.value);
  //   this.product.saveData(this.addProducts.value).subscribe((result) => {
  //     console.log("Data Saved!");

  //   });
  // }

  addProducts: FormGroup = new FormGroup({
    productName: new FormControl(''),
    material_id: new FormControl(''),
    material_name: new FormControl(''),
    workOrder: new FormControl(''),
    weight: new FormControl('')

  });


}
