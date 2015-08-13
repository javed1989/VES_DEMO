<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
	pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib prefix="web" tagdir="/WEB-INF/tags/web"%>
<%@ page import="com.votsh.access.UserProjectAccess"%>
<html>
<%
javax.servlet.http.HttpServletRequest _request = (javax.servlet.http.HttpServletRequest) request;
javax.servlet.http.HttpServletResponse _response = (javax.servlet.http.HttpServletResponse) response;
String _path = _request.getContextPath();
String gridValues=null; 
	UserProjectAccess ups=new UserProjectAccess();
	gridValues=ups.userProjectAccess();
	request.setAttribute("message", gridValues);   
%>
<head>
<script type="text/javascript"
	src="<%=_path%>/scripts/grid/dhtmlxgrid.js"></script>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>VOTSH</title>
<link rel="STYLESHEET" type="text/css"
	href="<%=_path%>/styles/dhtmlxgrid.css">
<link rel="STYLESHEET" type="text/css"
	href="<%=_path%>/styles/style.css">

<script type="text/javascript" src="<%=_path%>/scripts/application.js"></script>

</head>
<body>

	<form method="POST" action="authenticate.jsp">
		<!-- id="myForm"> -->
		<web:table>
			<tbody>
				<tr>
					<td>User Name</td>
					<td><input type="text" name="uname" value=""
						onkeydown="fetch();" /></td>
				</tr>
			</tbody>
		</web:table>
		<div id="gridbox" style="width: 500px; height: 200px;"></div>
		<web:table>
			<tbody>
				<tr>

					<td><input type="submit" value="submit" onClick="validate();" /></td>
					<td><input type="reset" value="Reset" /></td>
				</tr>
			</tbody>
		</web:table>
		<!--       <input type="hidden" id="queryGrid" value="GetXMLString(mygrid)" /> -->
		<input type="hidden" name="eXml" id="eXml">
		<script> 
   
   
        mygrid = new dhtmlXGridObject('gridbox'); 
        mygrid.setImagePath("../images/imgs/");           
        mygrid.setHeader("Sl.No,User Name,Project,Access"); 
        mygrid.setInitWidths("100,150,150,100");          
        mygrid.setColAlign("center,left,left,left");         
        mygrid.setColTypes("ed,ed,ro,ch");    

        mygrid.init();       
        var	jsonData= ${message}; 
     
        
        	mygrid.parse(jsonData,"json");
        	
        	 function validate(){
        	    	document.getElementById("eXml").value = GetXMLString(mygrid);    	
        	    }
        	
      
        	</script>



	</form>

</body>
</html>