import { NgModule } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbar } from '@angular/material/toolbar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list';
import { RouterModule } from '@angular/router';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';


@NgModule({
  exports: [
    MatSidenavModule,
    MatButtonModule ,
    MatIconModule ,
    MatListModule ,
    MatMenuModule,
    MatToolbarModule,
    MatToolbarModule ,
    MatInputModule ,
    MatFormFieldModule,
    MatSelectModule ,
    MatGridListModule, 
    RouterModule ,
    MatRadioModule,
        MatDatepickerModule,
    MatTableModule ,
    MatPaginatorModule
  ]
})
export class MaterialModule {}