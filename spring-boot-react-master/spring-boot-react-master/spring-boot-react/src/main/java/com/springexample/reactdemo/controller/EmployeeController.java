package com.springexample.reactdemo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.springexample.reactdemo.entity.Employee;
import com.springexample.reactdemo.service.EmployeeService;

@Controller
@RequestMapping(path = { "/employee" })
public class EmployeeController {
	
	@Autowired
	private EmployeeService employeeService;
	
	@GetMapping(path = { "/list" })
	@ResponseBody
	public List<Employee> employees() {
		
		return employeeService.findAllEmployees();
	}

}










