package com.votsh.support;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;
import java.sql.Statement;

public class UserValidate {
	Connection con = null;
	
	public boolean userValidate(String user) throws SQLException {
		// TODO Auto-generated method stub
		try {
			con = ConnectionProvider.getConnection();
			Statement st  = con.createStatement();
			ResultSet rs= st.executeQuery("Select * from USER_DETAILS where USER_NAME = '"+user+"' ");
			if(rs.next()){
				return true;
			}	
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		finally {
			con.close();
		}
		return false;
	}
	public UserValidate getInstance() {
		return new UserValidate();
	}
	
}
