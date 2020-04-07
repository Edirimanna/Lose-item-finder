package com.madhusanka.spring.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.madhusanka.spring.dao.LoseItemDAO;
import com.madhusanka.spring.model.Item;

@Service
public class LoseItemServiceIpl implements LoseItemService {

	@Autowired
	private LoseItemDAO loseItemDAO;
	
	@Override
	@Transactional
	public List<Item> list() {
		return loseItemDAO.list();
	}

	@Override
	@Transactional
	public long save(Item item) {
		return loseItemDAO.save(item);
	}

	@Override
	@Transactional
	public void delete(long id) {
		loseItemDAO.delete(id);	
	}
	

}
