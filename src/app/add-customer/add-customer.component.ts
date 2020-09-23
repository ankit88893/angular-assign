import { Component, OnInit } from '@angular/core';
// import {CustomerDetailsComponent} from '../customer-details/customer-details.component';
import { Customer } from '../model/customer';
import { Observable } from 'rxjs';
import {CustomerService} from '../service/customerservice';

@Component({
  selector: 'add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent {

 // customerService: CustomerService;

  constructor( private customerService:CustomerService) {
    this.customerService=customerService;
   }

   customer:Customer;


 // customer:Customer=undefined;

  addCustomer(form:any){
    let data=form.value;
   let balance=data.balance;
    let customername=data.customername;
    this.customer=new Customer(1,customername,balance);
    this.customerService.addCustomer(this.customer);
    let successFun = (customerVal: Customer) => this.customer = customerVal;
    

    let errFun = err =>  console.log("err in addusercomponent " + err.message);
  

    let observable: Observable<Customer> = this.customerService.addCustomer(this.customer);
    observable.subscribe(successFun, errFun);
  }
   }
 

