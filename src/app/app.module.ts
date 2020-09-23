import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
//import {FormsModule}  from '@angular/forms'
import { LengthPipe } from './pipes/length';
import { Reversepipe } from './pipes/reverse';
import {CustomerService} from './service/customerservice';
import { AddcustomerCodedrivenComponent } from './addcustomer-codedriven/addcustomer-codedriven.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CustomersListComponent,
    CustomerDetailsComponent,
    AddCustomerComponent,
    LengthPipe,
    Reversepipe,
    AddcustomerCodedrivenComponent
  ],
  imports: [
    BrowserModule,FormsModule, AppRoutingModule , ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [CustomerService,HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
