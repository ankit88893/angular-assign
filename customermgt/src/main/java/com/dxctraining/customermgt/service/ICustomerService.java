package com.dxctraining.customermgt.service;

import java.util.List;

import com.dxctraining.customermgt.entities.Customer;

public interface ICustomerService {

	Customer findCustomerById(Integer id);

	Customer save(Customer customer);

	void remove(Integer id);

	Customer update(Customer customer);

	List<Customer> allCustomers();

}
