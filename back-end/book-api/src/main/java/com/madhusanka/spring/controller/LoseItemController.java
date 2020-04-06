package com.madhusanka.spring.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.madhusanka.spring.model.Item;
import com.madhusanka.spring.service.LoseItemService;

@RestController
public class LoseItemController {
	
	@Autowired
	private LoseItemService loseItemService;
	
	@GetMapping("/item/all-item")
	public ResponseEntity<List<Item>> list(){
		List<Item> list=loseItemService.list();
		return ResponseEntity.ok().body(list);
		
	}

}
