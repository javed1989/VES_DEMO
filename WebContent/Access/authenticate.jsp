<%@ page import="java.sql.*"%>
<%@ page import="com.votsh.access.AccessTest"%>
<%@ page import="com.votsh.access.AccessTest"%>


<%


try{	
String userid = request.getParameter("uname"); 
String gridvalue = request.getParameter("eXml"); 

System.out.println("The modified data is:"+gridvalue);
Class.forName("oracle.jdbc.driver.OracleDriver");
Connection con = DriverManager.getConnection("jdbc:oracle:thin:@localhost:1521:xe",
        "sys as sysdba", "admin");

 CallableStatement pstmt = con.prepareCall("{call SP_USER_ACCESS(?,?,?)}"); 
 pstmt.setString(1, gridvalue);
 pstmt.registerOutParameter(2, Types.VARCHAR);
 pstmt.registerOutParameter(3, Types.VARCHAR); 
 pstmt.executeUpdate();
 System.out.println("The Error is:"+pstmt.getString(2));
 System.out.println("The Status is:"+pstmt.getString(3));
 pstmt.close();
 con.close();
  } catch (SQLException e) {	  
  }     
%>
Record updated. Approve another user
<a href='accessapprove.jsp'>Go to Approve Page</a>