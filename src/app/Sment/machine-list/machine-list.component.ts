import { Component, OnInit } from '@angular/core';
import { Machine } from 'src/app/Model/Machine';
import { MachineService } from 'src/app/Service/machine.service';

@Component({
  selector: 'app-machine-list',
  templateUrl: './machine-list.component.html',
  styleUrls: ['./machine-list.component.scss']
})
export class MachineListComponent  implements OnInit {
  constructor(private machine: MachineService) { }
  machineData: any = [];
  machineList: Machine[] = [];

  ngOnInit(): void {
    this.machine.getAll().subscribe((allData) => {
      console.log(allData);
      this.machineData = allData;
      this.getAll();
    });
  }

  getAll() {
    this.machine.getAll().subscribe({
      next: (res: any) => {
        this.machineList = res;
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
    this.machine.deleteMachineById(id).subscribe({
      next: (res) => {
        console.log('Machine Details Deleted successfully.. ID:' + id);
        this.getAll();
      },
      error: (res) => {
        console.log('Error');
      },
    });
  }

}
