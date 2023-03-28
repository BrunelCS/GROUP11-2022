package com.example.Events.Model;

import java.util.Date;

public class events {
	int event_id;
	String title;
	String address;
	int fee;
	Date ev_date;
	String content;
	
	
	public int getEvent_id() {
		return event_id;
	}
	public void setEvent_id(int event_id) {
		this.event_id = event_id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public int getFee() {
		return fee;
	}
	public void setFee(int fee) {
		this.fee = fee;
	}
	public Date getEv_date() {
		return ev_date;
	}
	public void setEv_date(Date ev_date) {
		this.ev_date = ev_date;
		
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	
	public events(int event_id, String title, String address, int fee, Date ev_date, String content) {
		super();
		this.event_id = event_id;
		this.title = title;
		this.address = address;
		this.fee = fee;
		this.ev_date = ev_date;
		this.content = content;
	}
	public events() {
		super();
	}
	
	@Override
	public String toString() {
		return "events [event_id=" + event_id + ", title=" + title + ", address=" + address + ", fee=" + fee
				+ ", ev_date=" + ev_date + ", content=" + content + "]";
	}
	
	
	
	
	
	
	
	
	
	
	
}
