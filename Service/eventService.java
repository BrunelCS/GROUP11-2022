package com.example.Events.Service;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.example.Events.Model.events;


@Repository
public interface eventService {
	
	public List<events> getEventData();
	
	
	
	
}
 