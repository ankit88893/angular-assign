package com.dxctraining.customermgt.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.dxctraining.customermgt.dto.CreateCustomerRequest;
import com.dxctraining.customermgt.dto.CustomerDto;
import com.dxctraining.customermgt.entities.Customer;
import com.dxctraining.customermgt.service.ICustomerService;
import com.dxctraining.customermgt.util.CustomerUtil;

@RestController
@RequestMapping("/customers")
public class CustomerRestController {

	
	@Autowired
	private ICustomerService service;
	
	@Autowired
	private CustomerUtil util;
	
	@Autowired
	private RestTemplate restTemplate;
	
	
	  @PostMapping(value = "/add")
	    @ResponseStatus(HttpStatus.CREATED)
	    public CustomerDto create(@RequestBody  CreateCustomerRequest data) {
	        String name = data.getName();
	        double balance = data.getBalance();
	     Customer customer = new Customer(name ,balance);
	        customer = service.save(customer);
	        CustomerDto response = util.customerDto(customer);
	        return response;
	    }


	    @GetMapping("/get/{id}")
	    public CustomerDto findCustomer(@PathVariable("id") int id) {
	        Customer customer = service.findCustomerById(id);
	        CustomerDto response = util.customerDto(customer);
	        return response;
	    }
	    
	    @DeleteMapping("/deleted/{id}")  
	    public void deleteUser(@PathVariable int id)  
	    {  
	    service.remove(id);  
	    }  


	    @GetMapping
	    public List<CustomerDto> fetchAll() {
	        List<Customer> list = service.allCustomers();
	        List<CustomerDto>response=new ArrayList<>();
	        for (Customer customer:list){
	            CustomerDto dto= util.customerDto(customer);
	            response.add(dto);
	        }
	        return response;
	    }

	
	
	
	
	
	
	
	
	
	
}
