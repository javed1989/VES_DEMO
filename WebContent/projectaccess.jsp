<%@ page import="java.sql.*"%>
<%@ page import="com.votsh.support.ConnectionProvider"%>


<%
	String userid = session.getAttribute("userid").toString();
	String project = request.getParameter("project");
	System.out.println("project is:" + project);
	System.out.println("user is in projectaccess:" + userid);
	Connection con;
	con = ConnectionProvider.getConnection();
	try {
		//The user proceeds with the selected project after getting approval from owner page(Access/accessapprove.jsp)
		Statement st = con.createStatement();
		ResultSet rset;

		rset = st
				.executeQuery("SELECT DP.PROJECT_NAME,DP.ACCESS_ALLOWED from USER_DETAILS UD, VES_DEMO_PROJECTS DP WHERE UD.USER_NAME=DP.USER_NAME AND"
						+ " UD.USER_NAME='"
						+ userid
						+ "' AND DP.ACCESS_ALLOWED=1 AND DP.PROJECT_NAME='"
						+ project + "' ");
		if (rset.next()) {
			System.out.println(rset.next());
			if (project.equals("1")) {
				response.sendRedirect("winapp.jsp");
			} else if (project.equals("2")) {
				response.sendRedirect("wordpress.jsp");
			} else if (project.equals("3")) {
				request.setAttribute("accessmsg",
						"Access Not Allowed For The Required Project");
				request.getRequestDispatcher("success.jsp").forward(
						request, response);
				return;
			} else if (project.equals("4")) {
				request.setAttribute("accessmsg",
						"Access Not Allowed For The Required Project");
				request.getRequestDispatcher("success.jsp").forward(
						request, response);
				return;
			}

		} else {
			request.setAttribute("accessmsg",
					"Access Not Allowed For The Required Project");
			request.getRequestDispatcher("success.jsp").forward(
					request, response);
			return;
		}
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} finally {
		con.close();
	}
%>
<br />
<center>
	Contact Owner <br />
	<%=session.getAttribute("userid")%>
	<br /> <a href='logout.jsp'>Log out</a>
</center>
