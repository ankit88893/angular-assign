package com.dxctraining.customermgt.dao;

import java.util.List;

import javax.persistence.EntityManager; 
import javax.persistence.PersistenceContext;
import javax.persistence.TypedQuery;

import org.springframework.stereotype.Repository;

import com.dxctraining.customermgt.entities.Customer;
import com.dxctraining.customermgt.exceptions.CustomerNotFoundException;

@Repository
public class CustomerDaoImpl implements ICustomerDao {

	@PersistenceContext

	private EntityManager em;

	@Override
	public Customer findCustomerById(Integer id) {

		Customer customer = em.find(Customer.class, id);
		if (id == null) {
			throw new CustomerNotFoundException("Id not found :-" + id);
		}
		return customer;

	}

	@Override
	public Customer save(Customer customer) {
		em.persist(customer);
		return customer;

	}

	@Override
	public Customer update(Customer customer) {
		customer = em.merge(customer);
		return customer;
	}

	@Override
	public void remove(Integer id) {
		Customer customer = findCustomerById(id);
		em.remove(customer);

	}

	@Override

	public List<Customer> allCustomer() {
		String ql = "from Customer ";
		TypedQuery<Customer> query = em.createQuery(ql, Customer.class);
		
	List<Customer> customerList	= query.getResultList();
	
	return customerList;

	}

}
