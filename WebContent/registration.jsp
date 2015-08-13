<!--Called for validating after reg.jsp to register the user  -->
<%@page import="com.votsh.support.UserValidate"%>
<%@page import="com.votsh.support.IUserValidate"%>
<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@ page import ="java.sql.*" %>
<%@ page import ="java.sql.ResultSet" %>
<%@page import="java.util.GregorianCalendar" %>
<%@page import="java.util.Date" %>
<%@page import="java.text.SimpleDateFormat"%>
<%-- <%@page import="com.votsh.support.Emailer" %> --%>
<%@page import="com.votsh.support.ConnectionProvider" %>
<%
       
    String pwd = request.getParameter("pass");
    String fname = request.getParameter("fname");
    String lname = request.getParameter("lname");
    String email = request.getParameter("email");
    String projects[] = request.getParameterValues("project");
    String userType = request.getParameter("userType");
    String currentTime="";
    Connection con =null;
    int rows=11;
    
    int count=rows++;  
   		if((email=="") || (email.isEmpty()) || (fname.isEmpty()) || (lname.isEmpty()) || (pwd.isEmpty()) ) {   			
	    	response.sendRedirect("reg.jsp?regmsg=all necesary fields has to be filled");
	    	return;
    	}
   		else if (new UserValidate().userValidate(email)) {   				
   				response.sendRedirect("reg.jsp?regmsg=User Already Exist, choose another email");
   				return;
   		} 		
    	else {
    		Date dt = new Date();
    		SimpleDateFormat sdf=new SimpleDateFormat("yyyy-MM-dd  HH:mm:ss");
    		GregorianCalendar calendar = new GregorianCalendar();
    		calendar.setTime(dt);
    		currentTime = sdf.format(calendar.getTime());
    		try {
    			con = ConnectionProvider.getConnection();
    			Statement st = con.createStatement();
    			PreparedStatement ps = con.prepareStatement("insert into VES_DEMO_PROJECTS(SL_NO,USER_NAME,PROJECT_NAME,ACCESS_ALLOWED) values(?,?,?,?)");
    			int check = st.executeUpdate("insert into USER_DETAILS(SLNO,USER_NAME, PASSWORD, F_NAME, L_NAME,TYPE) values('" + count + "','" + email + "','" + pwd + "','" + fname + "','" + lname + "','user')");
    		    
        		if (check > 0) {       			
           			
    			    request.setAttribute("message", "Registration Successful"); // Will be available as ${message}
    			    for(String s:projects){
    			    	 int countNo=rows++;
    			    	 ps.setInt(1, countNo);
    			    	ps.setString(2, email);
    			    	ps.setString(3, s);
    			    	ps.setInt(4, 0);
    			    	ps.executeUpdate();
    			    }        			
             		request.getRequestDispatcher("index.jsp").forward(request,response);   
        		} 
        		else {
           			response.sendRedirect("index.jsp");
        		}        		
    		}
    		catch (NullPointerException e) {
    			// TODO Auto-generated catch block
    			e.printStackTrace();
    			response.sendRedirect("reg.jsp");
    		} 
    		finally {
    			con.close();
    		}    		
    	}    
%>