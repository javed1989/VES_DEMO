<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Login</title>
</head>

<body>
	<form method="post" action="login.jsp">
		<center>
			<table border="1" width="30%" cellpadding="3">
				<thead>
					<tr>
						<th colspan="2">Login Here</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>User Name</td>
						<td><input type="text" name="uname" value="" /></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input type="password" name="pass" value="" /></td>
					</tr>
					<!--  <tr>
                        <td>Project</td>
                        <td>
                        <select name="project">
                        <option value="1">WINNAPP</option>
                         <option value="2">WORDPRESS</option>
                          <option value="3">PEPSICO</option>
                           <option value="4">COMMON</option>
                          </select>
                        </td>
                    </tr> -->
					<tr>
						<td><input type="submit" value="Submit" /></td>
						<!--     <td><input type="submit" value="Request Approval" /></td> -->
						<td><input type="button" value="Cancel" /></td>

					</tr>
					<tr>
						<td colspan="2">New User <a href="reg.jsp">Register Here</a></td>
					</tr>
				</tbody>
			</table>

		</center>
	</form>
	<div style="color: red">${message}</div>
	<div style="color: red">${loginmsg}</div>
	<div style="color: red">${accessmsg}</div>


</body>
</html>

