<%@tag body-content="empty"%>
<%@taglib uri="http://struts.apache.org/tags-html" prefix="html"%>
<%@attribute name="property" required="true"%>
<%@attribute name="value" required="false"%>
<html:hidden styleId="${property}" property="${property}" value="${value}"/>