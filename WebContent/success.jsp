<!--After successful login and selecting the required project this page forwards
 the request to projectaccess.jsp to check for the validity  -->
<%
	if (session.getAttribute("userid") == null) {
%>
<right> You are not logged in<br />
<a href="index.jsp">Please Login</a> </right>
<%
	} else {
%>
<div class="x" style="float: right;">
	Welcome <br />
	<div style="color: red">
		<%=session.getAttribute("userid")%>
	</div>
	<right> <a href='logout.jsp'>Log out</a> </right>
</div>
<%
	}
%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
</head>

<body>
	<form method="post" action="projectaccess.jsp">
		<br /> <br /> <br />
		<center>
			<table border="1" width="30%" cellpadding="3">
				<thead>
					<tr>
						<th colspan="2">Select Project</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td><select name="project">
								<option value="1">WINNAPP</option>
								<option value="2">WORDPRESS</option>
								<option value="3">PEPSICO</option>
								<option value="4">COMMON</option>
						</select></td>
					<tr>
						<td><input type="submit" value="Submit" /></td>
						<td><input type="button" value="Cancel" /></td>
					</tr>
				</tbody>
			</table>
		</center>
	</form>
	<div style="color: red">${accessmsg}</div>
</body>
</html>