package com.dxctraining.customermgt.dao;

import java.util.List;

import com.dxctraining.customermgt.entities.Customer;

public interface ICustomerDao {
	
	 Customer findCustomerById(Integer id);
	 Customer save(Customer customer);
	 Customer update(Customer customer);
	 void remove(Integer id);
	List<Customer> allCustomer();

}
