package com.madhusanka.spring.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name = "Item")
public class Item {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String finderName;
	private String finderAddress;
	private String finderContactno;
	private String findLocation;
	private String findTime;
	private String description;
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFinderName() {
		return finderName;
	}
	public void setFinderName(String finderName) {
		this.finderName = finderName;
	}
	public String getFinderAddress() {
		return finderAddress;
	}
	public void setFinderAddress(String finderAddress) {
		this.finderAddress = finderAddress;
	}
	public String getFinderContactno() {
		return finderContactno;
	}
	public void setFinderContactno(String finderContactno) {
		this.finderContactno = finderContactno;
	}
	public String getFindLocation() {
		return findLocation;
	}
	public void setFindLocation(String findLocation) {
		this.findLocation = findLocation;
	}
	public String getFindTime() {
		return findTime;
	}
	public void setFindTime(String findTime) {
		this.findTime = findTime;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	@Override
	public String toString() {
		return "Item [id=" + id + ", finderName=" + finderName + ", finderAddress=" + finderAddress
				+ ", finderContactno=" + finderContactno + ", findLocation=" + findLocation + ", findTime=" + findTime
				+ ", description=" + description + "]";
	}
	
	

}
