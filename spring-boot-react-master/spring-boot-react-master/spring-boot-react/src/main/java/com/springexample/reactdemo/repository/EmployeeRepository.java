package com.springexample.reactdemo.repository;

import org.springframework.data.repository.CrudRepository;

import com.springexample.reactdemo.entity.Employee;

public interface EmployeeRepository extends CrudRepository<Employee, Long> {

}
