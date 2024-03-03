import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from 'src/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './CRUD/home/home.component';
import { CreateComponent } from './CRUD/create/create.component';
import { ListComponent } from './CRUD/list/list.component';
import { EditComponent } from './CRUD/edit/edit.component';
import { DashboardComponent } from './CRUD/dashboard/dashboard.component';
import { ProductionComponent } from './ProductionCrud/production/production.component';
import { ProductsComponent } from './ProductionCrud/products/products.component';
import { AddBottlesComponent } from './Bottles/add-bottles/add-bottles.component';
import { BottlesListComponent } from './Bottles/bottles-list/bottles-list.component';
import { MachinesComponent } from './Sment/machines/machines.component';
import { RawMaterialComponent } from './Sment/raw-material/raw-material.component';
import { ClientsComponent } from './Sment/clients/clients.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductsListsComponent } from './ProductionCrud/products-lists/products-lists.component';
import { ClientListsComponent } from './Sment/client-lists/client-lists.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    DashboardComponent,
    ProductionComponent,
    ProductsComponent,
    AddBottlesComponent,
    BottlesListComponent,
    MachinesComponent,
    RawMaterialComponent,
    ClientsComponent,
    ProductsListsComponent,
    ClientListsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
