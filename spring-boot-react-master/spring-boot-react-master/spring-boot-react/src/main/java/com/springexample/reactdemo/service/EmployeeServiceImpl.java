package com.springexample.reactdemo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.springexample.reactdemo.entity.Employee;
import com.springexample.reactdemo.repository.EmployeeRepository;

@Service(value = "employeeService")
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Override
	public List<Employee> findAllEmployees() {
		return (List<Employee>)employeeRepository.findAll();
	}

}








