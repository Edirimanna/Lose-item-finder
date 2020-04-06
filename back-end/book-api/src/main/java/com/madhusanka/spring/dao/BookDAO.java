package com.madhusanka.spring.dao;

import java.util.List;

import com.madhusanka.spring.model.Book;



public interface BookDAO {
	
	//save the record
	long save(Book book);
	
	//get the single record
	Book get(long id);
	
	//get the all the record
	List<Book> list();
	
	//update the record
	void update(long id,Book book);
	 	
	//delete record
	void delete(long id);

}
