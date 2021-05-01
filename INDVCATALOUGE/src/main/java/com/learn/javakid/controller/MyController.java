package com.learn.javakid.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.javakid.model.IndividualInfo;
import com.learn.javakid.service.MyService;

@RestController
@CrossOrigin
public class MyController {
	
	@Autowired
	private MyService myService;

	@GetMapping("indv")
	public List<IndividualInfo> getAllIndividualInfo() {
		return myService.getAllIndividuals();
	}
	
	@GetMapping("indv/{id}")
	public Optional<IndividualInfo> getIndividual(@PathVariable String id) {
		return myService.getIndvById(id);
	}
	
	@PutMapping("indv/{id}")
	public void addOrUpdateIndividual(@RequestBody IndividualInfo infoObj, @PathVariable String id) {
		if(getIndividual(id) != null) {
			myService.updateOrInsertIndvInfo(infoObj);
		}
	}
	
	@PostMapping("indv")
	public void addIndividual(@RequestBody IndividualInfo obj) {
		myService.updateOrInsertIndvInfo(obj);
	}
	
	@DeleteMapping("indv/{id}")
	public void deleteIndividual(@PathVariable String id) {
		myService.removeIndv(id);
	}
}
