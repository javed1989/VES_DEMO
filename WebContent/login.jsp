<%@ page import="java.sql.*"%>
<%@ page import="com.votsh.support.ConnectionProvider"%>

<%
	String userid = request.getParameter("uname");
	String pwd = request.getParameter("pass");
	Connection con;
	con = ConnectionProvider.getConnection();

	try {

		Statement st = con.createStatement();
		ResultSet rs;
		rs = st.executeQuery("select * from USER_DETAILS where USER_NAME='"
				+ userid + "' and PASSWORD='" + pwd + "'");
		// login validation-----
		if (rs.next()) {
			session.setAttribute("userid", userid);
			response.sendRedirect("success.jsp");

		} else {
			request.setAttribute("loginmsg",
					"Invalid User Name or Password");
			request.getRequestDispatcher("index.jsp").forward(request,
					response);

			return;
		}
	} catch (SQLException e) {

		e.printStackTrace();
	} finally {
		con.close();
	}
%>
