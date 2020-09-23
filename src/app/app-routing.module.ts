import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCustomerComponent} from './add-customer/add-customer.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { AddcustomerCodedrivenComponent } from './addcustomer-codedriven/addcustomer-codedriven.component';


const routes: Routes = [
  {path:'',redirectTo:"customer-list",pathMatch:"full"},
  {path:"addcustomer-codedriven",component:AddcustomerCodedrivenComponent},
  { path:'customer-details', component:CustomerDetailsComponent },
  {  path: 'add-customer',  component:AddCustomerComponent },
  {
    path:'customers-list',
    component: CustomersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }