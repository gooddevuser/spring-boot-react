package com.springexample.reactdemo.service;

import java.util.List;

import com.springexample.reactdemo.entity.Employee;

public interface EmployeeService {
	
	List<Employee> findAllEmployees();

}
