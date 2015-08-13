<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>Registration</title>
<script type="text/javascript" src="include/check.js"> </script>
<script type="text/javascript" src="include/formcheck.js"> </script>
</head>
<body>
	<div style="color: red">${message}</div>
	<form name="vinform" method="post" action="registration.jsp"
		onsubmit="return required();">
		<center>
			<table border="1" width="30%" cellpadding="5">
				<thead>
					<tr>
						<th colspan="2">Enter Information Here</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>First Name</td>
						<td><input type="text" name="fname" value="" /></td>
					</tr>
					<tr>
						<td>Last Name</td>
						<td><input type="text" name="lname" value="" /></td>
					</tr>
					<tr>
						<td>Email</td>
						<td><input type="text" name="email" value=""
							onkeydown="javascript:sendInfo()"></td>
						<td><span id="amit"> </span></td>
					</tr>
					<tr>
						<td>Password</td>
						<td><input type="password" name="pass" value="" /></td>
					</tr>
					<tr>
						<td>Type</td>
						<td><select name="userType">
								<option value="user">User</option>
								<option value="owner">Owner</option>
						</select></td>
					</tr>
					<tr>
						<td><input type="checkbox" name="project" value="1">Project1</td>
						<td><input type="checkbox" name="project" value="2">Project2</td>
						<td><input type="checkbox" name="project" value="3">Project3</td>
						<td><input type="checkbox" name="project" value="4">Project4</td>
					</tr>
					<tr>
						<td><input type="submit" value="Submit" /></td>
						<td><input type="reset" value="Cancel" /></td>
					</tr>
					<tr>
						<td colspan="2">Already registered!! <a href="index.jsp">Login
								Here</a></td>
					</tr>
				</tbody>
			</table>
		</center>
	</form>
</body>
</html>