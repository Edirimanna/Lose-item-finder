package com.madhusanka.spring.dao;


import java.util.List;



import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.madhusanka.spring.model.Book;



@Repository
public class BookDAOImp implements BookDAO {

	@Autowired
	private SessionFactory SessionFactory;
	
	@Override
	public long save(Book book) {
	
		SessionFactory.getCurrentSession().save(book);
		return book.getId();
	}

	@Override
	public Book get(long id) {
		return SessionFactory.getCurrentSession().get(Book.class, id);
		
	}

	@Override
	public List<Book> list() {
		
		List<Book> list=SessionFactory.getCurrentSession().createQuery("from Book").list();
		return list;
	}

	@Override
	public void update(long id, Book book) {
		Book oldBook= SessionFactory.getCurrentSession().byId(Book.class).load(id);
		oldBook.setAuther(book.getAuther());
		oldBook.setTitle(book.getTitle());
		
	}

	@Override
	public void delete(long id) {
	Book book = SessionFactory.getCurrentSession().byId(Book.class).load(id);
	SessionFactory.getCurrentSession().delete(book);
	   
		
	}

}
