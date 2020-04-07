package com.madhusanka.spring.dao;

import java.util.List;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.madhusanka.spring.model.Item;

@Repository
public class LoseItemDAOImp implements LoseItemDAO {

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public List<Item> list() {
		List<Item> list = sessionFactory.getCurrentSession().createQuery("from Item").list();
		return list;
		
	}

	@Override
	public long save(Item item) {
		sessionFactory.getCurrentSession().save(item);
		return item.getId();
	}

	@Override
	public void delete(long id) {
		Item item  = sessionFactory.getCurrentSession().byId(Item.class).load(id);
		sessionFactory.getCurrentSession().delete(item);
		
		
	}


	

}
