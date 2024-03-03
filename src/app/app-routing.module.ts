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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
