package com.heer.ecom.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import com.heer.ecom.entity.Person;
@RepositoryRestResource(collectionResourceRel = "people", path = "people")
public interface PersonRepository extends MongoRepository<Person, String> {
	List<Person> findByLastName(@Param("name") String name);
	List<Person> findByFirstName(@Param("name") String name);
}
