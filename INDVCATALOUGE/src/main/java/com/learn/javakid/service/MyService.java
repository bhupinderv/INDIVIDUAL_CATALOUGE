package com.learn.javakid.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.learn.javakid.model.IndividualInfo;
import com.learn.javakid.repository.MyRepository;

@Service
public class MyService {

	@Autowired
	private MyRepository myRepository;
	
	public List<IndividualInfo> getAllIndividuals(){
		return myRepository.findAll();
	}
	
	public Optional<IndividualInfo> getIndvById(String id){
		return myRepository.findById(id);
	}
	
	public void updateOrInsertIndvInfo(IndividualInfo indvObj) {
		myRepository.save(indvObj);
	}
	
	public void removeIndv(String id) {
		myRepository.deleteById(id);
	}
}
