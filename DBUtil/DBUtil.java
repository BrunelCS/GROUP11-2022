package com.example.Events.DBUtil;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class DBUtil {
	private static Connection connection = null;
	
	public static Connection getConnection() throws SQLException {
		if (connection != null)
		{
			return connection;
		}
		else {
			String driver = "com.mysql.cj.jdbc.Driver";
			String url = "jdbc:mysql://172.31.82.191/G_11_DB";
			String user = "G_11";
			String password = "SdeJ1LTJZl";
			
			try {
				Class.forName(driver);
				connection = DriverManager.getConnection(url, user, password);
			}catch(ClassNotFoundException e) {
				e.printStackTrace();
			}
		}
		
		
		
		return connection;
	}
	
	
}
