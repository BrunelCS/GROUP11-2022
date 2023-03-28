package com.example.Events.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Events.Model.events;
import com.example.Events.Service.eventService;

@RestController
@CrossOrigin("http://localhost:3000")
public class eventController {

	@Autowired
	private eventService evService;
	
	@GetMapping("/events")
	public List<events> getEvents()
	{
		return this.evService.getEventData();
	}
	
	
	
	
	
	
}
