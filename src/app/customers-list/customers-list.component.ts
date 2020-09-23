import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/customer'
import{CustomerService} from '../service/customerservice'


@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent  {

  //customerService:CustomerService;
  customers: Customer[];

  constructor(private customerService:CustomerService){
    let observable:Observable<Customer[]>=customerService.findAllCustomers();
    observable.subscribe(
        customerArray=>this.customers=customerArray,
        error=> console.log("inside customer list component"+error.message)
    
    );
  
    }}