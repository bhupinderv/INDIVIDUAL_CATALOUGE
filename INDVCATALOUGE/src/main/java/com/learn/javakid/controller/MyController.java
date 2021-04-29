package com.learn.javakid.controller;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.learn.javakid.model.IndividualInfo;

@RestController
public class MyController {

	List<IndividualInfo> list = new ArrayList<>(Arrays.asList(
			new IndividualInfo("1","RAM","MALE","HIMACHAL"),
			new IndividualInfo("2","SHAM","MALE","DELHI"),
			new IndividualInfo("3","AMIT","MALE","BIHAR"),
			new IndividualInfo("4","GITA","FEMALE","KARNATAKA"),
			new IndividualInfo("5","SITA","FEMALE","MAHARASHTRA"),
			new IndividualInfo("6","AJAY","MALE","KASHMIRI"),
			new IndividualInfo("7","SHANKY","MALE","GOA"),
			new IndividualInfo("8","SHEETAL","FEMALE","PUNJAB"),
			new IndividualInfo("9","RAMESH","MALE","CHHATISGARH")
			));
	
	@GetMapping("test")
	public String testMethod() {
		return "Hello ji";
	}
	
	@GetMapping("indv")
	public List<IndividualInfo> getAllIndividualInfo() {
		return list;
	}
	
	@GetMapping("indv/{id}")
	public IndividualInfo getIndividual(@PathVariable String id) {
		return list.stream().filter(e->e.getId().equals(id)).findFirst().get();
	}
	
	@PutMapping("indv/{id}")
	public void addOrUpdateIndividual(@RequestBody IndividualInfo infoObj, @PathVariable String id) {
			deleteIndividual(id);
			addIndividual(infoObj);
	}
	
	@PostMapping("indv")
	public void addIndividual(@RequestBody IndividualInfo obj) {
		list.add(obj);
	}
	
	@DeleteMapping("indv/{id}")
	public void deleteIndividual(@PathVariable String id) {
		list.removeIf(e->e.getId().equals(id));
	}
}
