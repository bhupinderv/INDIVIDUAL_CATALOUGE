package com.learn.javakid.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class IndividualInfo {
	@Id
	private String id;
	private String name;
	private String gender;
	private String state;
	
	
	public IndividualInfo() {
	}
	
	public IndividualInfo(String id, String name, String gender, String state) {
		super();
		this.id = id;
		this.name = name;
		this.gender = gender;
		this.state = state;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getState() {
		return state;
	}
	public void setState(String state) {
		this.state = state;
	}
	
	
	
}
