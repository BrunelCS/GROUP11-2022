package com.example.Events.ServiceImplentation;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Events.DBUtil.DBUtil;
import com.example.Events.Model.events;
import com.example.Events.Service.eventService;

@Service
public class eventServiceImplementation implements eventService{

	@Autowired
	static List<events> eventList = new ArrayList();  
	
	Connection connection;

	public eventServiceImplementation() throws SQLException
	{
	 connection =DBUtil.getConnection();
	}
	
	@Override
	public List<events> getEventData(){
		
		try {
			PreparedStatement stmt = connection.prepareStatement("SELECT * FROM events");
			ResultSet rs = stmt.executeQuery();

			while(rs.next())
			{
				events ev = new events();

			     ev.setEvent_id(rs.getInt(1));
			     ev.setTitle(rs.getString(2));
			     ev.setAddress(rs.getString(3));
			     ev.setFee(rs.getInt(4));
			     ev.setEv_date(rs.getDate(5));
			     ev.setContent(rs.getString(6));
			     
			     eventList.add(ev);

			}
			

			
		} catch (SQLException e) {
 			e.printStackTrace();
		}
		
		return eventList;
	}
	
	
	
}
