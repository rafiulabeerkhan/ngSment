import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './CRUD/home/home.component';
import { CreateComponent } from './CRUD/create/create.component';
import { ListComponent } from './CRUD/list/list.component';
import { EditComponent } from './CRUD/edit/edit.component';
import { DashboardComponent } from './CRUD/dashboard/dashboard.component';
import { ProductsComponent } from './ProductionCrud/products/products.component';
import { ProductionComponent } from './ProductionCrud/production/production.component';
import { AddBottlesComponent } from './Bottles/add-bottles/add-bottles.component';
import { BottlesListComponent } from './Bottles/bottles-list/bottles-list.component';
import { MachinesComponent } from './Sment/machines/machines.component';
import { RawMaterialComponent } from './Sment/raw-material/raw-material.component';
import { ClientsComponent } from './Sment/clients/clients.component';
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


const routes: Routes = [
   {path:"home", component:HomeComponent},
   {path:"employee", component:CreateComponent},
   {path:"employeelist", component: ListComponent},
   {path:"edit/:employeeID", component: EditComponent},
   {path:"dashboard", component: DashboardComponent},
   {path:"product", component: ProductsComponent},
   {path:"production", component: ProductionComponent},
   {path:"create", component: AddBottlesComponent},
   {path:"list", component: BottlesListComponent},
   {path:"machine", component: MachinesComponent},
   {path:"material", component: RawMaterialComponent},
   {path:"client", component: ClientsComponent},
   {path:"addClient", component: ClientListsComponent},
   {path:"materialList", component: RawMaterialListComponent},
   {path:"update/:material_id", component: EditMaterialListComponent},
   {path:"salary", component: SalaryComponent},
   {path:"salaryList", component: SalaryListComponent},
   {path:"updateSalary/:employee_id", component: EditSalaryListComponent},
   {path:"order", component: OrderComponent},
   {path:"orderList", component: OrderListComponent},
   {path:"updateOrder/:order_id", component: EditOrderComponent},
   {path:"invoice", component: InvoiceComponent},
   {path:"invoiceList", component: InvoiceListComponent},
   {path:"updateList/:id", component: EditInvoiceComponent},
   {path:"details", component: OrderDetailsComponent},
   {path:"detailsList", component: OrderDetailsListComponent},
   {path:"orderList/:id", component: EditOrderDetailsComponent},
   {path:"login", component: LoginComponent},
   {path:"signup", component: SignUpComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
