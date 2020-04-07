package com.madhusanka.spring.service;

import java.util.List;

import com.madhusanka.spring.model.Item;


public interface LoseItemService {
	
	    //get all lose Item
		List<Item> list();
		
		//save the item record
		long save(Item item);
		
		//delete record
		void delete(long id);
}
