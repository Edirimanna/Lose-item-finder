package com.madhusanka.spring.dao;

import java.util.List;

import com.madhusanka.spring.model.Item;

public interface LoseItemDAO {
	
	//get all lose Item
	List<Item> list();
	
	//save the item record
	long save(Item item);
	
	
	
	//delete record
	void delete(long id);

}
