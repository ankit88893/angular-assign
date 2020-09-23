package com.dxctraining.customermgt.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.dxctraining.customermgt.dao.ICustomerDao;
import com.dxctraining.customermgt.entities.Customer;
import com.dxctraining.customermgt.exceptions.InvalidArgumentException;

@Service
@Transactional
public class CustomerServiceImpl implements ICustomerService {

	@Autowired
	private ICustomerDao dao;

	@Override

	public Customer findCustomerById(Integer id) {

		Customer customer = dao.findCustomerById(id);
		return customer;

	}

	@Override
	public Customer save(Customer customer) {
		validate(customer);
		customer = dao.save(customer);

		return customer;

	}

	@Override
	public void remove(Integer id) {

		dao.remove(id);

	}

	@Override
	public Customer update(Customer customer) {
		validate(customer);
		customer = dao.update(customer);
		return customer;

	}

	@Override
	public List<Customer> allCustomers() {
		List<Customer> customers = dao.allCustomer();
		return customers;
	}

	public void validate(Object arg) {

		if (arg == null) {
			throw new InvalidArgumentException("customer is invalid for ");

		}

	}

}
