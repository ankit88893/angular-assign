import { Component, OnInit } from '@angular/core';
import {Customer} from '../model/customer'
import {CustomerService} from '../service/customerservice';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent  {
  //customerService: CustomerService;

  constructor(private customerService:CustomerService) { 
    this.customerService=customerService;
  }
  customer:Customer;




  findCustomer(form:any){
    let data=form.value;
    let id=data.customerId;
    let observable:Observable<Customer>= this.customerService.findCustomerById(id);
    observable.subscribe(
      customerArg=>{this.customer=customerArg},
      error=>{
        console.log("error inside customer details component"+error.message)
      }
    );
     
   }

}
