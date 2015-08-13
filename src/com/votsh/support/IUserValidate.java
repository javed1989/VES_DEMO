package com.votsh.support;

import java.sql.SQLException;

public interface IUserValidate {
	
	boolean userValidate(String email) throws SQLException;

}
