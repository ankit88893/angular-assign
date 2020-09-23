import { Injectable } from '@angular/core';
import { Customer } from '../model/customer';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 
 @Injectable()
 export class CustomerService{
    baseUrl="http://localhost:8585/customers";
    constructor(private http: HttpClient){
    
    }



  addCustomer(customer:Customer):Observable<Customer>{
    let url=this.baseUrl+"/add";
let observable:Observable<Customer>= this.http.post<Customer>(url,customer);
return observable;
}

findAllCustomers():Observable<Customer[]>{
    let url = "http://localhost:8585/customers";
    let observable:Observable<Customer[]>=this.http.get<Customer[]>(url);
    return observable;
}
findCustomerById(id:number):Observable<Customer>{    
    let url = this.baseUrl+"/get/"+id;
    let observable:Observable<Customer> = this.http.get<Customer>(url);
    return observable;
}
 

removeCustomer(id:number):Observable<void>{
    let url = this.baseUrl+"/deleted/"+id;
    let observable:Observable<void>=this.http.delete<void>(url);
    return observable;
}

       
}
