package com.example.springboot.controller;

import java.awt.PageAttributes.MediaType;
import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.example.springboot.repository.EmployeeRepository;

import jakarta.servlet.http.HttpServletResponse;

import com.example.springboot.exception.ResourceNotFoundException;

import com.example.springboot.model.Employee;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	@Autowired
	private EmployeeRepository employeeRepository;
	//get all employees
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}
	//create employee
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
	//get employee by id
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee>  getEmployeeById( @PathVariable Long id ) {
		Employee employee =employeeRepository.findById(id)
				.orElseThrow(()->new ResourceNotFoundException("employee not exists with id : "+id));
		return 	ResponseEntity.ok(employee);
	};
	//update employee
	@PutMapping("/employees/{id}")
	public ResponseEntity <Employee> updateEmployee(@PathVariable Long id ,@RequestBody Employee employeeDetails){
		Employee employee = employeeRepository.findById(id)
			.orElseThrow(()-> new ResourceNotFoundException("employee not exits with id :"+id));	
		employee.setFirstName(employeeDetails.getFirstName());
		employee.setLastName(employeeDetails.getLastName());
		employee.setEmailId(employeeDetails.getEmailId());
		Employee updatedEmployee=employeeRepository.save(employee);
		return ResponseEntity.ok(updatedEmployee);
		
		
	};
	@DeleteMapping("/employees/{id}")
	public ResponseEntity <Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeRepository.findById(id)
				.orElseThrow(()-> new ResourceNotFoundException("employee not exits with id :"+id));	
		employeeRepository.delete(employee);
		Map<String, Boolean> response=new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
}
