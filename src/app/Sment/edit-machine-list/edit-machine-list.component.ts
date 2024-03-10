import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Machine } from 'src/app/Model/Machine';
import { FileUploadforbottleService } from 'src/app/Service/file-uploadforbottle.service';
import { MachineService } from 'src/app/Service/machine.service';

@Component({
  selector: 'app-edit-machine-list',
  templateUrl: './edit-machine-list.component.html',
  styleUrls: ['./edit-machine-list.component.scss']
})
export class EditMachineListComponent implements OnInit {


  constructor(
    private machine: MachineService,
    private route: ActivatedRoute,
    private uploadService: FileUploadforbottleService
  ) {}
  id!: number;
  ngOnInit(): void {
    this.route.params.subscribe((param)=>{
      this.id = param["machine_id"];
      console.log(this.id);
       this.getMachineById(this.id);

    
       
      
    })
  }





 

  


  onSub() {
    console.log(this.editMachine.value);
    this.machine.saveMachine(this.editMachine.value).subscribe((result) =>{
      console.log("Data Saved");
      
    })
    
    }

    editMachine: FormGroup = new FormGroup({
      machine_id: new FormControl(''),
      country: new FormControl(''),
      status: new FormControl(''),
      pmProduction: new FormControl(''),
      employee_id: new FormControl('')
    });

    rawMachine!: Machine;
    getMachineById(id: number) {
      this.machine.getMachineById(id).subscribe({
        next: (res) => {
          this.rawMachine = res;
          this.editMachine.patchValue(this.rawMachine);
        },
        error: (res) => {
          console.log(res);
        },
      });
    }

}
