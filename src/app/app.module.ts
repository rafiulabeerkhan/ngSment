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
import { RawMaterialListComponent } from './Sment/raw-material-list/raw-material-list.component';
import { EditMaterialListComponent } from './Sment/edit-material-list/edit-material-list.component';
import { SalaryComponent } from './Sment/salary/salary.component';
import { SalaryListComponent } from './Sment/salary-list/salary-list.component';
import { EditSalaryListComponent } from './Sment/edit-salary-list/edit-salary-list.component';
import { OrderComponent } from './Order/order/order.component';
import { OrderListComponent } from './Order/order-list/order-list.component';
import { EditOrderComponent } from './Order/edit-order/edit-order.component';
import { InvoiceComponent } from './Invoice/invoice/invoice.component';
import { InvoiceListComponent } from './Invoice/invoice-list/invoice-list.component';
import { EditInvoiceComponent } from './Invoice/edit-invoice/edit-invoice.component';
import { OrderDetailsComponent } from './OrderDetails/order-details/order-details.component';
import { OrderDetailsListComponent } from './OrderDetails/order-details-list/order-details-list.component';
import { EditOrderDetailsComponent } from './OrderDetails/edit-order-details/edit-order-details.component';
import { LoginComponent } from './Authentication/login/login.component';
import { SignUpComponent } from './Authentication/sign-up/sign-up.component';
import { ProductionListComponent } from './ProductionCrud/production-list/production-list.component';
import { EditProductionListComponent } from './ProductionCrud/edit-production-list/edit-production-list.component';
import { MachineListComponent } from './Sment/machine-list/machine-list.component';
import { EditMachineListComponent } from './Sment/edit-machine-list/edit-machine-list.component';
import { EditBottleListComponent } from './Bottles/edit-bottle-list/edit-bottle-list.component';


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
    ClientListsComponent,
    RawMaterialListComponent,
    EditMaterialListComponent,
    SalaryComponent,
    SalaryListComponent,
    EditSalaryListComponent,
    OrderComponent,
    OrderListComponent,
    EditOrderComponent,
    InvoiceComponent,
    InvoiceListComponent,
    EditInvoiceComponent,
    OrderDetailsComponent,
    OrderDetailsListComponent,
    EditOrderDetailsComponent,
    LoginComponent,
    SignUpComponent,
    ProductionListComponent,
    EditProductionListComponent,
    MachineListComponent,
    EditMachineListComponent,
    EditBottleListComponent

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
