package com.learn.javakid.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.learn.javakid.model.IndividualInfo;

@Repository
public interface MyRepository extends JpaRepository<IndividualInfo, String>{

}
