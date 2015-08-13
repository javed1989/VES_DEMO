/** Variable Declaration BEGIN * */

var LOADING_DATA = '';
var TIME = 'T';
var EMPTY_STRING = '';
var ADD = 'A';
var MODIFY = 'M';
var VIEW = 'V';
var MAIN = 1;
var TBA = 2;
var PK = 'pk';
var PK_VALUE = EMPTY_STRING;
var SOURCE = 'source';
var SOURCE_VALUE = EMPTY_STRING;
var PK_VALUE = EMPTY_STRING;
var MTM_REQUEST_TYPE = '_MtmReqType';
var MTM_PRIMARY_KEY = '_MtmPrimaryKey';
var MTM_PROGRAM_ID = '_MtmProgramID';
var MTM_MAIN = 'M';
var MTM_TBA = 'T';
var COLUMN_ENABLE = '1';
var COLUMN_DISABLE = '0';
var DATA_AVAILABLE = "1";
var DATA_NOT_AVAILABLE = "0";
var RESPONSE = 'response';
var RESULT = 'result';
var RESULT_XML = 'result_xml';

var CONTENT = 'content';
var ERROR = 'error';
var KEY_F1 = 112;
var KEY_F2 = 113;
var KEY_F3 = 114;
var KEY_F4 = 115;
var KEY_F5 = 116;
var KEY_F6 = 117;
var KEY_F7 = 118;
var KEY_F8 = 119;
var KEY_F9 = 120;
var KEY_F10 = 121;
var KEY_F11 = 122;
var KEY_F12 = 123;
var CTRL = 17;
var ALT = 18;
var ESC = 27;
var ENTER = 13;
var END = 35;
var HOME = 36;
var TAB = 9;
var BACKSPACE = 8;
var DELETE = 46;
var DOT = 46;
var MINUS = 45;
var HYPHEN = 45;
var FWDSLASH = 47;
var SPACE = 32;
var AT = 64;
var UNDERSCORE = 95;

var UPARROW = 38;
var DOWNARROW = 40;
var LEFTARROW = 37;
var RIGHTARROW = 39;

var UPPERCASE_A = 65;
var UPPERCASE_Z = 90;
var LOWERCASE_A = 97;
var LOWERCASE_Z = 122;

var NUMBER_0 = 48;
var NUMBER_9 = 57;

var tempAmt = 0;
var REASON = 'R';// narmada-13-mar-2015

var FIELDTYPE = EMPTY_STRING;
var ALPHA = 'A';
var NUMERIC = 'N';
var ALPHANUMERIC = 'AN';
var DATE = 'D';
var EMAIL = 'E';
var CHECKBOX = 'CB';
var AMOUNT = 'AT';

var BACKTRACK = 'F2-BACK TRACK';
var HELP = 'F5-HELP';
var EXIT = 'ESC-EXIT';
var CANCEL = 'ESC-CANCEL';
var EXITGRID = 'F10-EXIT GRID';

var SEPERATOR = ',';
var lastFocusField = null;

var CHROME = "Chrome";
var IE = "Microsoft Internet Explorer";
var FIREFOX = "Firefox";

var PGM_ID = EMPTY_STRING;
var AUTH_DATE = EMPTY_STRING;
var TBA_SL = EMPTY_STRING;
var USER_ACTION = EMPTY_STRING;

var openWindows = new Array();
var DATETIME = 'DT';
/** Variable Declaration END * */

// to disable backtracking
window.history.forward(1);

document.onkeypress = keypress;
document.onkeydown = keydown;
window.onload = maxWindow;
var WORKFLOW = 3;

function maxWindow() {

}

_isFunctionKey = false;

var FIRSTFIELD = EMPTY_STRING;

function setFFID(id) {
	FIRSTFIELD = id;
}

function disableAllFields(element) {
	var form = $$(element.toLowerCase());
	var field = "";
	for (var i = 0; i < form.length; i++) {
		field = form.elements[i].id;
		$$(field).readOnly = true;
		$$(field).disabled = true;
	}
}

function getBasePath() {
	return document.getElementsByTagName("base")[0].href;
}

function setProcessId(processId) {
	$$('processId').value = processId;
}

function setOprLogSl(oprlogsl) {
	$$('oprLogSl').value = oprlogsl;
}

function getOprLogSl() {
	return $$('oprLogSl').value;
}

function AmountSubtraction(Amount1, Amount2) {
	var amount1 = new BigDecimal(Amount1);
	var amount2 = new BigDecimal(Amount2);
	var compareValue = amount1.subtract(amount2);
	return compareValue;
}

function keypress(ev) {
	ev = ev || window.event;
	ch = isPressKeyCode(ev);
	if (ch == TAB) {
		dostopevent(ev);
		return false;
	}
	return true;
}

function keydown(ev) {
	ev = ev || window.event;
	ch = isPressKeyCode(ev);

	if (ev.ctrlKey) {
		jAlert(CTRL_DISABLED, 'Alert For  ' + getUserID());
		return false;
	}
	if (ch == KEY_F1 || KEY_F2 || ch == KEY_F3 || ch == KEY_F4 || ch == KEY_F5
			|| ch == KEY_F6 || ch == KEY_F7 || ch == KEY_F8 || ch == KEY_F9
			|| ch == KEY_F10 || ch == KEY_F11 || ch == KEY_F12)
		_isFunctionKey = true;
	else
		_isFunctionKey = false;

	if ((!ev.altKey) && (ch == 0) || (ch == KEY_F1) || (ch == KEY_F5)
			|| (ch == KEY_F3) || (ch == KEY_F4) || (ch == KEY_F6)
			|| (ch == KEY_F11) || (ch == KEY_F12) || (ch == ENTER)
			|| (ch == TAB)) {
		dostopevent(ev);
		return false;
	}

	if (((ev.altKey) && (ev.keyCode === 83))
			|| ((ev.altKey) && (ev.keyCode === 69))
			|| ((ev.altKey) && (ev.keyCode === 67))) {// ||(ev.keyCode === 69)
														// ||(ev.keyCode === 67)
														// ){//ALT+S.ALT+E,ALT+C
		dostopevent(ev);
		return false;
	}

	if (ev.keyCode == ESC) {
		var helpgridval = document.getElementById('helpGrid_handle').style.display;

		if (helpgridval == 'block') {
			hideHelp();
		} else {
			cancelPage();
		}
	}

	return true;
}

function dokeydown(event, element) {
	event = event || window.event;
	ch = isPressKeyCode(event);
	if (ch == TAB) {
		if (event.shiftKey == false) {
			try {
				event.charCode = 13;
			} catch (err) {
			}
			try {
				event.keyCode = 13;
			} catch (err) {
			}
			try {
				event.which = 13;
			} catch (err) {
			}
			dokeypress(event, element);
			validate(element.id);
			return;
		} else {
			try {
				event.charCode = 0;
			} catch (err) {
			}
			try {
				event.keyCode = 0;
			} catch (err) {
			}
			try {
				event.which = 0;
			} catch (err) {
			}
			PERFORM_BACKTRACK(element.id);
			return;
		}
	}
	switch (ch) {
	case KEY_F2:
		PERFORM_BACKTRACK(element.id);
		break;
	case KEY_F5:
		doHelp(element.id);
		break;

	case ESC:
		if (FIRSTFIELD == element.id) {
			exitPage();
		} else {

			var helpgridval = document.getElementById('helpGrid_handle').style.display;

			if (helpgridval == 'block') {
				hideHelp();
			}

			else {
				cancelPage();
			}

		}
		break;
	}
}

function dokeypress(event, element) {
	clearError();
	event = event || window.event;
	ch = isPressKeyCode(event);
	if (ch != LEFTARROW && ch != RIGHTARROW) {
		if ($$(element.id).hasClass('code')
				|| $$(element.id).hasClass('code-help')) {
			$$(element.id).value = $$(element.id).value.toUpperCase();
		}
	}

	if (ch != TAB) {
		if (ch != BACKSPACE) {
			if (FIELDTYPE == DATE) {
				seperatorappend(event, element);
			} else if (FIELDTYPE == ALPHA) {
				if (!((ch >= UPPERCASE_A && ch <= UPPERCASE_Z)
						|| (ch >= LOWERCASE_A && ch <= LOWERCASE_Z) || (ch == SPACE))) {
					setErrMsg(ALPHA_CHECK);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == NUMERIC) {
				if (!(ch >= NUMBER_0 && ch <= NUMBER_9)) {
					setErrMsg(INVALID_NUMBER);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == ALPHANUMERIC) {
				if (!((ch >= UPPERCASE_A && ch <= UPPERCASE_Z)
						|| (ch >= LOWERCASE_A && ch <= LOWERCASE_Z)
						|| (ch >= NUMBER_0 && ch <= NUMBER_9) || (ch == SPACE) || (ch == DOT))) {
					setErrMsg(ALPHA_NUMERIC_CHECK);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == EMAIL) {
				if (!((ch >= UPPERCASE_A && ch <= UPPERCASE_Z)
						|| (ch >= LOWERCASE_A && ch <= LOWERCASE_Z)
						|| (ch >= NUMBER_0 && ch <= NUMBER_9) || (ch == DOT)
						|| (ch == AT) || (ch == UNDERSCORE))) {
					setErrMsg(INVALID_EMAIL_ID);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == CHECKBOX) {
				if (!(ch == SPACE)) {
					setErrMsg(EMPTY_STRING);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == AMOUNT) {
				if (!((ch >= NUMBER_0 && ch <= NUMBER_9) || (ch == DOT) || (ch == MINUS))) {
					setErrMsg(INVALID_AMOUNT);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == TIME) {
				if (!((ch >= NUMBER_0 && ch <= NUMBER_9) || (ch == SEMICOLON))) {
					setErrMsg(INVALID_TIME);
					dostopevent(event);
					return false;
				}
			} else if (FIELDTYPE == DATETIME) {
				seperatedatetime(event, element);
			} else if (FIELDTYPE == REASON) {
				seperatorappend1(event, element);
			}
		}
	}
	$$(element.id).spellcheck = false;// 20-jan-2015 Banu
}

function seperatorappend1(event, element) {
	var len = $$(element.id).value;
	if (parseInt(len.length) == 250) {
		setErrMsg('Field should not exceed above 250 Characters');
		dostopevent(event);
		return false;
	}

}
function seperatedatetime(event, element) {
	var ch = isPressKeyCode(event);
	if (!(ch >= NUMBER_0 && ch <= NUMBER_9)) {
		setErrMsg(INVALID_NUMBER);
		dostopevent(event);
		return false;
	} else {
		if (ch != BACKSPACE) {
			var len = $$(element.id).value;
			if (!((ch == BACKSPACE) || (ch == ENTER) || (ch == DELETE)
					|| (ch == LEFTARROW) || (ch == RIGHTARROW) || (ch == HOME)
					|| (ch == END) || (ch == SPACE))) {
				if (parseInt(len.length) >= 19) {
					dostopevent(event);
					return false;
				} else if (parseInt(len.length) == 2
						|| parseInt(len.length) == 5) {
					$$(element.id).value = $$(element.id).value + "-";
				} else if (parseInt(len.length) == 10) {
					$$(element.id).value = $$(element.id).value + " ";
				} else if (parseInt(len.length) == 13
						|| parseInt(len.length) == 16) {
					$$(element.id).value = $$(element.id).value + ":";
				}
			}
		}
	}
}
function seperatorappend(event, element) {
	var ch = isPressKeyCode(event);
	if (!(ch >= NUMBER_0 && ch <= NUMBER_9)) {
		setErrMsg(INVALID_NUMBER);
		dostopevent(event);
		return false;
	} else {
		if (ch != BACKSPACE) {
			var len = $$(element.id).value;
			if (!((ch == BACKSPACE) || (ch == ENTER) || (ch == DELETE)
					|| (ch == LEFTARROW) || (ch == RIGHTARROW) || (ch == HOME) || (ch == END))) {
				if (parseInt(len.length) >= 10) {
					dostopevent(event);
					return false;
				} else if (parseInt(len.length) == 2
						|| parseInt(len.length) == 5) {
					$$(element.id).value = $$(element.id).value + "-";
				}
			}
		}
	}
}

/** XML Utility Functions BEGIN * */

var REFLECTION_CLASS = '_ReflectionClass';
var REFLECTION_METHOD = '_ReflectionMethod';
var REPORT_CLASS = '_ReportClass';

function xmlHTTPValidator() {
	var xmlDOM = null;
	var report = null;
	var reportName = null;
	var mtmX = false;

	if (window.XMLHttpRequest) {
		if (window.DOMParser) {
			var objDOMParser = new DOMParser();
			xmlDOM = objDOMParser.parseFromString(
					'<response><record></record></response>', 'text/xml');
			xmlDOM.normalize();
		} else {
			xmlDOM = new ActiveXObject('Microsoft.XMLDOM');
			xmlDOM.async = "false";
			xmlDOM.loadXML('<response><record></record></response>');
		}
	} else {
		/* IE */
		try {
			var XMLHttpMS = [ "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0",
					"Msxml2.XMLHTTP", "Microsoft.XMLHTTP" ];
			for (var i = 0; i < XMLHttpMS.length; i++) {
				try {
					xmlDOM = new window.ActiveXObject(XMLHttpMS[i]);
					break;
				} catch (err) {
					xmlDOM = null;
				}
			}
		} catch (err) {

		}
		xmlDOM.loadXML('<response><record></record></response>');
	}
	this.XMLDOM = xmlDOM;
	this.getValue = getValueX;
	this.setValue = setValueX;
	this.sendAndReceive = sendAndReceiveX;
	this.sendAndReceiveAsync = sendAndReceiveAsyncX;
	this.setClass = setClassX;
	this.getClass = getClassX;
	this.setMethod = setMethodX;
	this.getMethod = getMethodX;
	this.setReport = setReportX;
	this.clearMap = clearMapX;
	this.getAllXML = getAllXMLX;
	this.reset = resetX;
	this.setReportClassName = setReportClassNameX;
	this.getReportClassName = getReportClassNameX;
	this.setMtm = setMtmX;
	this.mtm = mtmX;

	var responseFunction = null;

	function resetX() {
		this.mtm = false;
		this.clearMap();
	}

	function clearMapX() {
		if (window.XMLHttpRequest) {
			if (window.DOMParser) {
				var objDOMParser = new DOMParser();
				xmlDOM = objDOMParser.parseFromString(
						'<response><record></record></response>', 'text/xml');
				xmlDOM.normalize();
			} else {
				xmlDOM = new ActiveXObject('Microsoft.XMLDOM');
				xmlDOM.async = "false";
				xmlDOM.loadXML('<response><record></record></response>');
			}
		} else {
			/* IE */
			try {
				var XMLHttpMS = [ "Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.3.0",
						"Msxml2.XMLHTTP", "Microsoft.XMLHTTP" ];
				for (var i = 0; i < XMLHttpMS.length; i++) {
					try {
						xmlDOM = new window.ActiveXObject(XMLHttpMS[i]);
						break;
					} catch (err) {
						xmlDOM = null;
					}
				}
			} catch (err) {

			}
			xmlDOM.loadXML('<response><record></record></response>');
		}
		this.mtm = false;
	}

	function setClassX(className) {
		setValueX(REFLECTION_CLASS, className);
	}
	function getClassX() {
		return getValueX(REFLECTION_CLASS);
	}
	function setMethodX(methodName) {
		setValueX(REFLECTION_METHOD, methodName);
	}
	function getMethodX() {
		return getValueX(REFLECTION_METHOD);
	}

	function setReportX(required) {
		this.report = required;
	}

	function setMtmX(mtmRequired) {
		this.mtm = mtmRequired;
	}

	function getValueX(KeyName) {
		try {
			if (window.XMLHttpRequest) {
				if (window.DOMParser) {
					if (xmlDOM.documentElement.childNodes[0]
							.getElementsByTagName(KeyName).length == 0) {
						return EMPTY_STRING;
					} else {
						if (xmlDOM.documentElement.childNodes[0]
								.getElementsByTagName(KeyName)[0].childNodes.length == 0)
							return EMPTY_STRING;
						return xmlDOM.documentElement.childNodes[0]
								.getElementsByTagName(KeyName)[0].firstChild.nodeValue;
					}
				} else {
					if (xmlDOM.documentElement.childNodes[0]
							.getElementsByTagName(KeyName).length == 0) {
						return EMPTY_STRING;
					} else {
						if (xmlDOM.documentElement.childNodes[0]
								.getElementsByTagName(KeyName)[0].childNodes.length == 0)
							return EMPTY_STRING;
						return xmlDOM.documentElement.childNodes[0]
								.getElementsByTagName(KeyName)[0].firstChild.nodeValue;
					}
				}
			} else {
				/* IE */
				try {
					return xmlDOM.documentElement.childNodes(0)
							.getElementsByTagName(KeyName)(0).text;
				} catch (err) {

				}
			}

		} catch (e) {
			return EMPTY_STRING;
		}
	}

	function setValueX(KeyName, Value) {
		if (window.XMLHttpRequest) {
			if (window.DOMParser) {
				xmlDOM.documentElement.childNodes[0].appendChild(
						xmlDOM.createElement(KeyName)).appendChild(
						xmlDOM.createTextNode(Value));
			} else {
				xmlDOM.documentElement.childNodes[0].appendChild(
						xmlDOM.createElement(KeyName)).appendChild(
						xmlDOM.createTextNode(Value));
			}
		} else {
			/* IE */
			try {
				var Element = xmlDOM.createNode('element', KeyName,
						EMPTY_STRING);
				xmlDOM.documentElement.childNodes[0].appendChild(Element);
				xmlDOM.documentElement.childNodes[0].getElementsByTagName(
						KeyName)(0).text = Value;
			} catch (err) {

			}
		}

	}

	function sendAndReceiveX() {
		var urlstr = EMPTY_STRING;
		var frmlength = xmlDOM.documentElement.childNodes[0].childNodes.length;
		for (var j = 0; j < frmlength; j++) {
			if (j == 0) {
				itemName = xmlDOM.documentElement.childNodes[0].childNodes[0].tagName;
			} else {
				itemName = '&'
						+ xmlDOM.documentElement.childNodes[0].childNodes[j].tagName;
			}
			try {
				urlstr = urlstr
						+ itemName
						+ '='
						+ xmlDOM.documentElement.childNodes[0].childNodes[j].firstChild.nodeValue;
			} catch (e) {
				urlstr = urlstr + itemName + '=';
			}
		}
		urlstr = encodeURI(urlstr);
		var responseXML = null;
		if (this.mtm) {
			responseXML = dhtmlxAjax.postSync('servlet/MtmProcessor', urlstr);
		} else if (this.report) {
			// dhtmlxAjax.postSync('servlet/ReportProcessor', urlstr);
			window
					.open('servlet/ReportProcessor?' + urlstr, '_blank',
							'toolbar=No,width=1024,height=768,left=0,top=0,resizable=yes');
		} else {
			responseXML = dhtmlxAjax.postSync('servlet/DataProcessor', urlstr);
		}
		var rtnXML = responseXML.doSerialization();
		clearMapX();
		if (window.XMLHttpRequest) {
			if (window.DOMParser) {
				var objDOMParser = new DOMParser();
				xmlDOM = objDOMParser.parseFromString(rtnXML, 'text/xml');
				xmlDOM.normalize();
			} else {
				xmlDOM = new ActiveXObject('Microsoft.XMLDOM');
				xmlDOM.async = "false";
				xmlDOM.loadXML(rtnXML);
			}
		} else {
			/* IE */
			try {
				xmlDOM.loadXML(rtnXML);
			} catch (err) {

			}
		}

		return true;
	}

	function sendAndReceiveAsyncX(func) {
		var urlstr = EMPTY_STRING;
		responseFunction = func;
		var frmlength = xmlDOM.documentElement.childNodes[0].childNodes.length;
		for (var j = 0; j < frmlength; j++) {
			if (j == 0) {
				itemName = xmlDOM.documentElement.childNodes[0].childNodes[0].tagName;
			} else {
				itemName = '&'
						+ xmlDOM.documentElement.childNodes[0].childNodes[j].tagName;
			}
			try {
				urlstr = urlstr
						+ itemName
						+ '='
						+ xmlDOM.documentElement.childNodes[0].childNodes[j].firstChild.nodeValue;
			} catch (e) {
				urlstr = urlstr + itemName + '=';
			}
		}
		urlstr = encodeURI(urlstr);
		if (this.mtm) {
			dhtmlxAjax.post('servlet/MtmProcessor', urlstr, doAsyncProcessingX);
		} else if (this.report) {
			window
					.open('servlet/ReportProcessor?' + urlstr, '_blank',
							'toolbar=No,width=1024,height=768,left=0,top=0,resizable=yes');
		} else {
			dhtmlxAjax
					.post('servlet/DataProcessor', urlstr, doAsyncProcessingX);
		}
	}

	function doAsyncProcessingX(responseXML) {
		clearMapX();
		var rtnXML = responseXML.doSerialization();
		if (document.all) {
			xmlDOM.loadXML(rtnXML);
		} else {
			var objDOMParser = new DOMParser();
			xmlDOM = objDOMParser.parseFromString(rtnXML, 'text/xml');
			xmlDOM.normalize();
		}
		responseFunction();
	}

	function setReportClassNameX(reportName) {
		this.reportName = reportName;
		setValueX(REPORT_CLASS, reportName);
	}

	function getReportClassNameX() {
		return getValueX(REPORT_CLASS);
	}

}

function parseXML(xmlString) {
	var xmlDoc = null;
	try {
		xmlDoc = new ActiveXObject('Microsoft.XMLDOM');
		xmlDoc.async = false;
		xmlDoc.loadXML(xmlString);
	} catch (e) {
		var parser = new DOMParser();
		xmlDoc = parser.parseFromString(xmlString, 'text/xml');
	}
	return xmlDoc;
}

function getXML(DOMobj) {
	if (document.all) {
		return DOMobj.xml;
	} else {
		var xmlSerializer = new XMLSerializer();
		return xmlSerializer.serializeToString(DOMobj);
	}
}

function getAllXMLX() {
	if (document.all) {
		return xmlDOM.xml;
	} else {
		var objXMLSerializer = new XMLSerializer;
		var strXML = objXMLSerializer.serializeToString(xmlDOM);
		return strXML;
	}
}

/** XML Utility Functions END * */

/** AJAX Request Function BEGIN * */

var req = null;
var url = null;
var data = null;

function checkSession() {
	validator.clearMap();
	validator.setClass("com.corenett.validators.GeneralValidator");
	validator.setMethod("CheckSession");
	validator.sendAndReceive();
	if (validator.getValue("result") == DATA_AVAILABLE) {
		return true;
	} else {
		return false;
	}
}

function processRequest(myForm) {

	jConfirm(SUBMIT_CONFIRM, 'Confirm', function(r) {
		if (r == true) {
			if (checkSession()) {

				openFormModal();
				url = myForm.getAttribute('action');
				data = bindFormData(myForm);
				if (window.XMLHttpRequest) {
					req = new XMLHttpRequest(); // Non-IE Browsers
				} else {
					req = new ActiveXObject("Microsoft.XMLHTTP"); // IE
																	// browsers
				}
				req.onreadystatechange = stateChanged;
				req.open("POST", url, false);
				req.setRequestHeader("content-type",
						"application/x-www-form-urlencoded");
				req.send(URLEncode(data));
				closeFormModal();
				// init();20-03-2015 Banu
			} else {
				alert(SESSION_EXPIRED);
			}
		} else {
			jAlert('You are not going to submit this Page', 'Alert For  '
					+ getUserID());
			$$(FIRSTFIELD).focus();
		}
	});

}

function stateChanged() {
	var message = null;
	if (req.readyState == 0) {
		message = "Not Initialized";
	} else if (req.readyState == 1) {
		message = "Request Loading";
	} else if (req.readyState == 2) {
		message = "Request Loaded";
	} else if (req.readyState == 3) {
		message = "Requesting Business Process";
	} else {
		message = "Request Process Completed";
		if (req.status == 200) {
			returndata(req.responseText);
		} else {
			jAlert('Communication Error', 'Alert For  ' + getUserID());
		}
	}
	document.getElementById('msg').innerHTML = message;
}

function bindFormData(form) {
	var data = "";
	var tot_elements = 0;
	tot_elements = form.length;
	for (var i = 0; i < tot_elements; i++) {
		data += form[i].name;
		data += "=";
		if (form[i].value != "") {
			// data +=form[i].value;//Dilip 12-jan-2015 for & in all the text
			// boxes
			var d = form[i].value.replace(/&/g, '%26');
			data += d;
		} else {
			data += "";
		}
		if (i + 1 < tot_elements) {
			data += "&&";
		}
	}
	return data;
}

function URLEncode(urlstr) {
	var SAFECHARS = "0123456789" + "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
			+ "abcdefghijklmnopqrstuvwxyz" + "-_.!~*'()=?&";
	var HEX = "0123456789ABCDEF";
	var plaintext = urlstr;

	var encoded = "";
	for (var i = 0; i < plaintext.length; i++) {
		var ch = plaintext.charAt(i);
		if (ch == " ") {
			encoded += "+";
		} else if (SAFECHARS.indexOf(ch) != -1) {
			encoded += ch;
		} else {
			var charCode = ch.charCodeAt(0);
			if (charCode > 255) {
				jAlert('Unicode Character ' + ch
						+ ' cannot be encoded using standard URL encoding.\n'
						+ '(URL encoding only supports 8-bit characters.)\n'
						+ 'A space (+) will be substituted.', 'Alert For  '
						+ getUserID());

				encoded += "+";
			} else {
				encoded += "%";
				encoded += HEX.charAt((charCode >> 4) & 0xF);
				encoded += HEX.charAt(charCode & 0xF);
			}
		}
	}
	return encoded;
}

function returndata(returnMessage) {
	if (document.all) {
		/* IE */
		xmlDOM = new ActiveXObject('Microsoft.XMLDOM');
		xmlDOM.loadXML(returnMessage);
	} else {
		var objDOMParser = new DOMParser();
		xmlDOM = objDOMParser.parseFromString(returnMessage, 'text/xml');
		xmlDOM.normalize();
	}
	var status = null;
	var addinfo = null;
	var KeyName = "status";
	if (document.all) {
		status = xmlDOM.documentElement.childNodes(0).getElementsByTagName(
				KeyName)(0).text;
		try {
			addinfo = xmlDOM.documentElement.childNodes(0)
					.getElementsByTagName("additionalinfo")(0).text;
		} catch (err) {
		}
	} else {
		if (xmlDOM.documentElement.childNodes[0].getElementsByTagName(KeyName).length == 0) {
			status = EMPTY_STRING;
			addinfo = EMPTY_STRING;
		} else {
			if (xmlDOM.documentElement.childNodes[0]
					.getElementsByTagName(KeyName)[0].childNodes.length == 0) {
				status = EMPTY_STRING;
				addinfo = EMPTY_STRING;
			}
			status = xmlDOM.documentElement.childNodes[0]
					.getElementsByTagName(KeyName)[0].firstChild.nodeValue;
			try {
				addinfo = xmlDOM.documentElement.childNodes[0]
						.getElementsByTagName("additionalinfo")[0].firstChild.nodeValue;
			} catch (err) {
			}
		}
	}

	if (status == 1) {

		if (addinfo != null && addinfo != 'null' && addinfo != ''
				&& addinfo != 'undefined') {
			jAlert(RECORD_UPDATE, 'BATCH-NUMBER-->' + addinfo.toString(),
					function() {
						init();
					});
		} else {
			jAlert(RECORD_UPDATE, '', function() {
				init();
			});
		}
	} else if (status == 0) {
		jAlert(RECORD_NOT_UPDATE, ' For  ' + $$('processId').value, function() {
			init();
		});
	}
}
var Alert = new CustomAlert();
function CustomAlert() {
	this.render = function(message) {
		var dialog = trim(message);
		var winW = window.innerWidth;
		var winH = window.innerHeight;
		var dialogoverlay = document.getElementById('dialogoverlay');
		var dialogbox = document.getElementById('dialogbox');
		dialogoverlay.style.display = "block";
		dialogoverlay.style.height = winH + "px";
		dialogbox.style.left = (winW / 2) - (550 * .5) + "px";
		dialogbox.style.top = "100px";
		dialogbox.style.display = "block";
		document.getElementById('dialogboxhead').innerHTML = "";
		document.getElementById('dialogboxfoot').innerHTML = '<button id ="ok" onclick="Alert.ok()">OK</button>';
		document.getElementById('ok').focus();
		var rowsplit = dialog.split('@s');
		var newTable = "<table border='1' width='100%' style= 'margin-right:2cm;' 'margin-left:2cm;'>";

		for (var j = 0; j < rowsplit.length; j++) {
			var colsplit = rowsplit[j].split('@c');
			newTable += "<tr>";
			for (var i = 0; i < colsplit.length; i++) {
				newTable += "<td align='center'>" + colsplit[i] + "</td>";
			}
			newTable += "</tr>";
		}
		newTable += "</table>";
		document.getElementById('dialogboxbody').innerHTML = newTable;
	};
	this.ok = function() {
		document.getElementById('dialogbox').style.display = "none";
		document.getElementById('dialogoverlay').style.display = "none";
		init();
	};
}
var FORM_MODAL = document.createElement('DIV');
FORM_MODAL.innerHTML = "<table style='position:absolute;top:40%;left:45%;height:5%;font-size:small;font-family:tahoma;font-weight:bold;color:white'><tr><td><img src='images/waiting.gif'></img>&nbsp;&nbsp;<span id='msg' style='position:relative;top:-12px;'></span></td><tr></table>";
var FORM_IFRAME = document.createElement('IFRAME');
FORM_IFRAME.src = "blank.html";
FORM_IFRAME.className = "iframe-hidden";
function openFormModal() {
	FORM_MODAL.visibility = "visible";
	FORM_MODAL.className = "modal-visible";
	document.body.appendChild(FORM_IFRAME);
	document.body.appendChild(FORM_MODAL);
}
function closeFormModal() {
	FORM_MODAL.className = "modal-hidden";
	document.body.removeChild(FORM_IFRAME);
	document.body.removeChild(FORM_MODAL);
}

/** AJAX Request Function END * */

/** Help Window Function BEGIN * */

var AJAX_TOKEN = 'AJAX_TOKEN';
var _TOKEN_KEY = '_TOKEN';
var _ARGUMENT_KEY = '_ARGS';
var _START_POSITION_KEY = 'posStart';
var _BUFFER_KEY = 'count';
var _INIT_KEY = 'init';
var _SEARCH_TEXT_KEY = '_SRCHTXT';
var _SEARCH_COLUMN_KEY = '_SRCHCOL';
var _SORT_ORDER = '_SORTORDER';
var _SORT_ASC = 'ASC';
var _SORT_DESC = 'DESC';
var _ORDER_COLUMN = '_ORDERCOL';

function showHelp(id) {
	lastFocusField = id;
	doHelp(id);
}

function hideHelp(ele) {

	document.getElementById('helpGrid_handle').style.display = 'none';
	document.getElementById(lastFocusField).focus();
}

/** Help Window Function END * */

/** Dummy Function END * */

function doHelp(id) {
}
function loadTree() {
}
function correctSizes() {
}
function init() {
}
function validate(id) {
}
function fieldfocus(id) {
}
function change(element) {
}
function doOnRowSelected(id) {
}
function PERFORM_BACKTRACK(id) {
}
function loadData() {
}
function clearFields() {
}
function fieldkeyup(id) {
}

/** Dummy Function END * */

/** KEY EVENTS Function BEGIN * */

function doload(event) {
	loadTree();
	correctSizes();
	checkbrowser();
	init();
}

function doUnload(event) {

}

function dofocus(event, element) {
	try {
		fieldfocus(element.id);
	} catch (err) {
	}
}

function dochange(event, element) {
	try {
		change(element.id);
	} catch (err) {
	}
}

function doblur(event, element) {
	try {
		document.getElementById("infoMsg").innerHTML = EMPTY_STRING;
		if ($$(element.id).hasClass('code')
				|| $$(element.id).hasClass('code-help')) {
			$$(element.id).value = $$(element.id).value.toUpperCase();
		}
	} catch (err) {
	}
}

function checkclick(id) {
	if (document.getElementById(id).checked) {
		$$('hid' + id).value = "1";
		$$(id + "_desc").innerHTML = "Yes";
	} else {
		$$('hid' + id).value = "0";
		$$(id + "_desc").innerHTML = "No";
	}
}

function setCheckboxValue(id, flag) {
	if (flag == '1') {
		$$(id).checked = true;
		$$('hid' + id).value = "1";
		$$(id + "_desc").innerHTML = "Yes";
	} else if (flag == '0') {
		$$(id).checked = false;
		$$('hid' + id).value = "0";
		$$(id + "_desc").innerHTML = "No";
	}
}
function docheckclick(event, element) {
	checkclick(element.id);
}
function dokeyup(event, element) {
	if (ch != LEFTARROW && ch != RIGHTARROW) {
		if ($$(element.id).hasClass('code')
				|| $$(element.id).hasClass('code-help')) {
			$$(element.id).value = $$(element.id).value.toUpperCase();
		}
	}
	if (element) {
		if (element.value == EMPTY_STRING) {
			document.getElementById(element.id + '_desc').innerHTML = EMPTY_STRING;
			fieldkeyup(element.id);
		}
	}
}
function dostopevent(event) {
	try {
		event.stopPropagation();
	} catch (e) {
	}
	try {
		event.preventDefault();
	} catch (e) {
	}
	try {
		window.event.keyCode = 0;
	} catch (e) {
	}
	try {
		window.event.returnValue = false;
	} catch (e) {
	}
	return false;
}
function isPressKeyCode(evt) {
	evt = (evt) ? evt : (window.event) ? event : null;
	if (evt) {
		var charCode = (evt.charCode) ? evt.charCode
				: ((evt.keyCode) ? evt.keyCode : ((evt.which) ? evt.which : 0));
		return charCode;
	}
	return 0;
}

/** KEY EVENTS Function END * */

function doPostBack(ele) {
	window.location.replace(ele.href);
	closeChildWindows();
}

/** Validation Functions BEGIN * */

function isEmpty(str) {
	return (str == null) || (str.length == 0);
}

function isEmail(str) {
	var len = str.length;
	if (len > 0) {
		if (isNaN(str.charAt(0)) == false) {
			return false;
		} else {
			var addressPattern = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
			return addressPattern.test(str);
		}
	}
}

function isAlpha(str) {
	var re = /[^a-zA-Z]/g;
	if (re.test(str))
		return false;
	return true;
}

function spaceCheck(str) {
	var re = /[^0-9a-zA-Z\s]/g;
	if (re.test(str)) {
		return false;
	}
	return true;
}

function isValidYear(value) {
	var re = /^[12][0-9]{3}$/; // 1900-2099
	if (re.test(value)) {
		return true;
	}
	return false;
}

function isValidIPv4(value) {
	var ip = value.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/);
	return ip
			&& !!(ip[1] <= 255 && ip[2] <= 255 && ip[3] <= 255 && ip[4] <= 255)
			|| false;
}

function trim(str) {
	var resultStr = "";
	resultStr = trimLeft(str);
	resultStr = trimRight(resultStr);
	return resultStr;
}

function trimLeft(str) {
	var resultStr = "";
	var i = len = 0;
	if (str + "" == "undefined" || str == null)
		return null;
	str += "";
	if (str.length == 0)
		resultStr = "";
	else {
		len = str.length;
		while ((i <= len) && (str.charAt(i) == " "))
			i++;
		resultStr = str.substring(i, len);
	}
	return resultStr;
}

function trimRight(str) {
	var resultStr = "";
	var i = 0;
	if (str + "" == "undefined" || str == null)
		return null;
	str += "";
	if (str.length == 0)
		resultStr = "";
	else {
		i = str.length - 1;
		while ((i >= 0) && (str.charAt(i) == " "))
			i--;
		resultStr = str.substring(0, i + 1);
	}
	return resultStr;
}

function isAmount(amount) {
	amount = unFormat(amount);
	// var regex = /^\d{1,27}(?:\.\d{0,2})?$/;
	var regex = /^\d{1,27}(?:\.\d{0,3})?$/;// Changed to 3 decimal instead of 2
	return regex.test(amount);
}

function isAmountGreater(amount1, amount2) {
	amount1 = unFormat(amount1);
	amount2 = unFormat(amount2);
	var amountDecimal1 = new BigDecimal(amount1);
	var amountDecimal2 = new BigDecimal(amount2);
	if (amount1 == 0 && amount2 == 0)
		return true;
	var compareValue = amountDecimal1.compareTo(amountDecimal2);
	if (compareValue > 0)
		return true;
	return false;
}

function isAmountGreaterThanEqual(amount1, amount2) {
	amount1 = unFormat(amount1);
	amount2 = unFormat(amount2);
	var amountDecimal1 = new BigDecimal(amount1);
	var amountDecimal2 = new BigDecimal(amount2);
	var compareValue = amountDecimal1.compareTo(amountDecimal2);
	if (compareValue >= 0)
		return true;
	return false;
}

function isAmountLesser(amount1, amount2) {
	amount1 = unFormat(amount1);
	amount2 = unFormat(amount2);
	var amountDecimal1 = new BigDecimal(amount1);
	var amountDecimal2 = new BigDecimal(amount2);
	var compareValue = amountDecimal1.compareTo(amountDecimal2);
	if (compareValue < 0)
		return true;
	return false;
}

function isAmountLesserThanEqual(amount1, amount2) {
	amount1 = unFormat(amount1);
	amount2 = unFormat(amount2);
	var amountDecimal1 = new BigDecimal(amount1);
	var amountDecimal2 = new BigDecimal(amount2);
	var compareValue = amountDecimal1.compareTo(amountDecimal2);
	if (compareValue <= 0)
		return true;
	return false;
}

function isAmountEqual(amount1, amount2) {
	amount1 = unFormat(amount1);
	amount2 = unFormat(amount2);
	var amountDecimal1 = new BigDecimal(amount1);
	var amountDecimal2 = new BigDecimal(amount2);
	var compareValue = amountDecimal1.compareTo(amountDecimal2);
	if (compareValue == 0)
		return true;
	return false;
}

function isPositiveAmount(amount) {
	var regex = /^\d{1,27}(?:\.\d{0,3})?$/;
	return regex.test(amount);
}

function isZeroAmount(amount) {
	amount = unFormat(amount);
	var amountDecimal = new BigDecimal(amount);
	var zeroAmount = new BigDecimal('0');
	var compareValue = amountDecimal.compareTo(zeroAmount);
	if (compareValue == 0)
		return true;
	return false;
}

function isNegativeAmount(amount) {
	amount = unFormat(amount);
	var regex = /^[\-]\d{1,27}(?:\.\d{0,2})?$/;
	return regex.test(amount);
}

function isNumeric(number) {
	var regex = /^[\-]?\d+$/;
	return regex.test(number);
}

function isZero(number) {
	var numberBigDecimal = new BigDecimal(number);
	var zeroBigDecimal = new BigDecimal('0');
	if (numberBigDecimal.compareTo(zeroBigDecimal) == 0)
		return true;
	return false;
}

function isPositive(number) {
	var regex = /^\d+$/;
	return regex.test(number);
}

function isNegative(number) {
	var regex = /^[\-]\d+$/;
	return regex.test(number);
}

function isNumberGreater(number1, number2) {
	var numberDecimal1 = new BigDecimal(number1);
	var numberDecimal2 = new BigDecimal(number2);
	var compareValue = numberDecimal1.compareTo(numberDecimal2);
	if (compareValue > 0)
		return true;
	return false;
}

function isNumberGreaterThanEqual(number1, number2) {
	var numberDecimal1 = new BigDecimal(number1);
	var numberDecimal2 = new BigDecimal(number2);
	var compareValue = numberDecimal1.compareTo(numberDecimal2);
	if (compareValue >= 0)
		return true;
	return false;
}

function isNumberLesser(number1, number2) {
	var numberDecimal1 = new BigDecimal(number1);
	var numberDecimal2 = new BigDecimal(number2);
	var compareValue = numberDecimal1.compareTo(numberDecimal2);
	if (compareValue < 0)
		return true;
	return false;
}

function isNumberLesserThanEqual(number1, number2) {
	var numberDecimal1 = new BigDecimal(number1);
	var numberDecimal2 = new BigDecimal(number2);
	var compareValue = numberDecimal1.compareTo(numberDecimal2);
	if (compareValue <= 0)
		return true;
	return false;
}

function isNumberEqual(number1, number2) {
	var numberDecimal1 = new BigDecimal(number1);
	var numberDecimal2 = new BigDecimal(number2);
	var compareValue = numberDecimal1.compareTo(numberDecimal2);
	if (compareValue == 0)
		return true;
	return false;
}

function addDaysToDate(str, count) {
	var dateInstance = Date.parseExact(str, SCRIPT_DATE_FORMAT);
	dateInstance = dateInstance.addDays(count);
	return (dateInstance.getDate() + "-"
			+ parseInt(dateInstance.getMonth() + 1) + "-" + dateInstance
			.getFullYear());
}

function addMonthsToDate(str, count) {
	var dateInstance = Date.parseExact(str, SCRIPT_DATE_FORMAT);
	dateInstance = dateInstance.addMonths(parseInt(count));
	return (dateInstance.getDate() + "-"
			+ parseInt(dateInstance.getMonth() + 1) + "-" + dateInstance
			.getFullYear());
}

function daysDifference(date1, date2) {
	var dateInstance = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance1 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	return parseInt((dateInstance1.getTime() - dateInstance.getTime())
			/ (24 * 3600 * 1000));
}

function monthsDifference(date1, date2) {
	var dateInstance = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance1 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	var d1m = parseInt(dateInstance1.getMonth());
	var d1y = parseInt(dateInstance1.getFullYear());
	var dm = parseInt(dateInstance.getMonth());
	var dy = parseInt(dateInstance.getFullYear());
	return (parseInt(d1m + 12 * d1y) - parseInt(dm + 12 * dy));
}

function yearsDifference(date1) {
	var dateInstance = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance1 = Date.parseExact(getCBD(), SCRIPT_DATE_FORMAT);
	return (parseInt(dateInstance1.getFullYear() - dateInstance.getFullYear()));
}

function isAlphaNumeric(str) {
	var re = /[^a-zA-Z0-9]/g;
	if (re.test(str))
		return false;
	return true;
}

function isLength(str, len) {
	return str.length == len;
}

function isLengthBetween(str, min, max) {
	return (str.length >= min) && (str.length <= max);
}

function isPhoneNumber(str) {
	if (isLength(str, 10)) {
		if (isNumeric(str)) {
			return true;
		}
	}
	return false;
	return re.test(str);
}

function isValidTime(value) {
	var time = value.split(':');
	var hrs = time[0];
	var mm = time[1];
	if ((parseInt(hrs) >= 0 && parseInt(hrs) < 24)
			&& (parseInt(mm) >= 0 && parseInt(mm) < 60)) {
		return true;
	}
	return false;
}

function isTimeGreater(value1, value2) {
	var time1 = value1.split(':');
	var time2 = value2.split(':');
	var timevalue1 = time1[0] + time1[1];
	var timevalue2 = time2[0] + time2[1];
	return parseInt(timevalue1, 10) > parseInt(timevalue2, 10);
}

function isTimeGreaterEqual(value1, value2) {
	var time1 = value1.split(':');
	var time2 = value2.split(':');
	var timevalue1 = time1[0] + time1[1];
	var timevalue2 = time2[0] + time2[1];
	return parseInt(timevalue1, 10) >= parseInt(timevalue2, 10);
}

function isTimeLesser(value1, value2) {
	var time1 = value1.split(':');
	var time2 = value2.split(':');
	var timevalue1 = time1[0] + time1[1];
	var timevalue2 = time2[0] + time2[1];
	return parseInt(timevalue1, 10) < parseInt(timevalue2, 10);
}
function isTimeLesserEqual(value1, value2) {
	var time1 = value1.split(':');
	var time2 = value2.split(':');
	var timevalue1 = time1[0] + time1[1];
	var timevalue2 = time2[0] + time2[1];
	return parseInt(timevalue1, 10) <= parseInt(timevalue2, 10);
}
function isTimeEqual(date1, date2) {
	var time1 = value1.split(':');
	var time2 = value2.split(':');
	var timevalue1 = time1[0] + time1[1];
	var timevalue2 = time2[0] + time2[1];
	return parseInt(timevalue1, 10) == parseInt(timevalue2, 10);
}

function isDate(str) {
	var dateInstance = Date.parseExact(str, SCRIPT_DATE_FORMAT);
	if (dateInstance == null)
		return false;
	else
		return dateInstance;
}

function isDateGreater(date1, date2) {
	var dateInstance1 = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance2 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	return dateInstance1.getTime() > dateInstance2.getTime();
}

function isDateGreaterEqual(date1, date2) {
	var dateInstance1 = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance2 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	return dateInstance1.getTime() >= dateInstance2.getTime();
}

function isDateLesser(date1, date2) {
	var dateInstance1 = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance2 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	return dateInstance1.getTime() < dateInstance2.getTime();
}

function isDateLesserEqual(date1, date2) {
	var dateInstance1 = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance2 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	return dateInstance1.getTime() <= dateInstance2.getTime();
}

function isDateEqual(date1, date2) {
	var dateInstance1 = Date.parseExact(date1, SCRIPT_DATE_FORMAT);
	var dateInstance2 = Date.parseExact(date2, SCRIPT_DATE_FORMAT);
	return dateInstance1.getTime() == dateInstance2.getTime();
}

function isMatch(str1, str2) {
	return str1 == str2;
}
function isWhitespace(str) {
	var re = /[\S]/g;
	if (re.test(str))
		return false;
	return true;
}
function isValidPercentage(number) {
	var regex = /^\d{1,3}(?:\.\d{0,4})?$/;
	if (regex.test(number)) {
		if (parseFloat(number) <= 0 || parseFloat(number) > 100) {
			setError(PERCENTAGE_CHECK);
			return false;
		}
		return true;
	}
	setError(INVALID_PERCENTAGE);
	return false;
}
function checkPasswordCriteria(password, minLength, minAlpha, minNumeric,
		minSpecial) {
	var ALPHA_STRING = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	var NUMERIC_STRING = '0123456789';
	var SPECIAL_CHARACTERS_STRING = '<=:`[?;,\\^_}@>.)"(\'$#*%~-/&!]{|+';
	var alphaCount = 0;
	var numericCount = 0;
	var specialCount = 0;
	var w_char = null;
	if (password == null || password == EMPTY_STRING)
		return false;
	if (password.length < parseInt(minLength))
		return false;
	for (var i = 0; i < password.length; ++i) {
		w_char = password.charAt(i);
		if (ALPHA_STRING.indexOf(w_char) >= 0) {
			alphaCount++;
		} else if (NUMERIC_STRING.indexOf(w_char) >= 0) {
			numericCount++;
		} else if (SPECIAL_CHARACTERS_STRING.indexOf(w_char) >= 0) {
			specialCount++;
		}
	}

	if (!(parseInt(minAlpha) <= alphaCount
			&& parseInt(minNumeric) <= numericCount && specialCount <= parseInt(minSpecial))) {
		return false;
	}
	return true;
}

/** Validation Functions END * */

function setFocus(elementId) {
	try {
		lastFocusField = elementId;
		$$(elementId).focus();
	} catch (err) {
	}
}
function setMessage(message, info) {
	try {
		document.getElementById("fieldMsg").innerHTML = message;
		document.getElementById("infoMsg").innerHTML = info;
		document.getElementById('fieldMsg').style.color = '#004993';
	} catch (err) {
	}
}
function ErrorMessage(elementId) {
	try {
		if (document.getElementById("fieldMsg") != null)
			document.getElementById("fieldMsg").innerHTML = EMPTY_STRING;
	} catch (err) {
	}
}
function setError(message) {
	try {
		document.getElementById("fieldMsg").innerHTML = message;
		document.getElementById('fieldMsg').style.color = 'red';
	} catch (err) {
	}
}
function setErrMsg(message) {
	try {
		document.getElementById("fieldMsg").innerHTML = message;
		document.getElementById('fieldMsg').style.color = 'red';
	} catch (err) {
	}
}
function setError(elementId, message) {
	try {
		document.getElementById("fieldMsg").innerHTML = message;
		document.getElementById("fieldMsg").innerHTML = elementId + ' '
				+ message;
		document.getElementById('fieldMsg').style.color = 'red';
	} catch (err) {
	}
}
function clearError(elementId) {
	try {
		if (document.getElementById("fieldMsg") != null)
			document.getElementById("fieldMsg").innerHTML = EMPTY_STRING;
	} catch (err) {
	}
}
function clearError() {
	try {
		if (document.getElementById("fieldMsg") != null)
			document.getElementById("fieldMsg").innerHTML = EMPTY_STRING;
	} catch (err) {
	}
}
function clearField(elementId) {
	if ($$(elementId).type == "text") {
		$$(elementId).value = EMPTY_STRING;
		$$(elementId + "_desc").innerHTML = EMPTY_STRING;
	} else if ($$(elementId).type == "textarea") {
		$$(elementId).value = EMPTY_STRING;
		$$(elementId + "_desc").innerHTML = EMPTY_STRING;
	} else if ($$(elementId).type == "password") {
		$$(elementId).value = EMPTY_STRING;
	} else if ($$(elementId).type == "checkbox") {
		$$(elementId).checked = false;
		$$('hid' + elementId).value = "0";
		$$(elementId + "_desc").innerHTML = "No";
	}
	$$(elementId + "_error").innerHTML = EMPTY_STRING;
}

/** File Uploader BEGIN * */

var FileUploadManager = {
	show : function() {
		winhandle = dhtmlmodal.open('filebox', 'div', 'fileInput_container',
				'File Uploader',
				'width=400px,height=80px,center=1,resize=0,scrolling=0');
	},
	upload : function() {
		$$("fileInput_submit").disabled = true;
		FileUploadManager.startMonitoring();
		return true;
	},
	cancel : function(id) {
		$$("fileInput_submit").disabled = false;
		FileUploadManager.stopMonitoring();
		return true;
	},
	startMonitoring : function(id) {
		setTimeout('FileUploadManager.checkStatus()', 500);
		return true;
	},
	stopMonitoring : function(id) {
		return true;
	},
	checkStatus : function(id) {
		FileUploadProxy.getStatus(FileUploadManager.progressMonitoring);
		return true;
	},
	progressMonitoring : function(uploadStatus) {
		if (uploadStatus.status == 2) {
			uploadStatus.percentComplete = 100;
			FileUploadManager.updateProgress(uploadStatus);
			$$("fileInput_submit").disabled = false;
			return;
		}
		if (uploadStatus.status == 3) {
			jAlert('An error has occured! ' + uploadStatus.message, ' For  '
					+ $$('processId').value);
			return;
		}
		if (uploadStatus.status == 4) {
			jAlert('An error has occured! ' + uploadStatus.message, ' For  '
					+ $$('processId').value);
			return;
		}
		FileUploadManager.updateProgress(uploadStatus);
		setTimeout('FileUploadManager.checkStatus()', 500);
		return;
	},
	updateProgress : function(uploadStatus) {
		var percentage = uploadStatus.percentComplete;
		var progress = document.getElementById("fileInput_uploadProgressBar");
		var indicator = document.getElementById("fileInput_uploadIndicator");
		var maxWidth = parseIntWithPx(progress.style.width) - 4;
		var width = percentage * maxWidth / 100;
		indicator.style.width = width + "px";
		var perc = document.getElementById("fileInput_uploadPercentage");
		perc.innerHTML = percentage + "%";
	}
};
function parseIntWithPx(str) {
	var strArray = str.split("p");
	return parseInt(strArray[0]);
}
function ModalWindow() {
	this.handle = null;
	this.show = showX;
	this.hide = hideX;

	function showX(_id, _width, _height, _title) {
		this.handle = dhtmlmodal.open('filebox', 'div', _id, _title, 'width='
				+ _width + ',height=' + _height
				+ ',center=1,resize=0,scrolling=0');
	}

	function hideX() {
		if (this.handle) {
			this.handle.hide();
		}

	}
}
/** File Uploader END * */

/** GRID FUNCTION BEGIN * */
function getCellValue(gridobj, row, col) {
	return gridobj.cells(row, col).getValue();
}

function AddRowToGrid(gridobj) {
	var cols = gridobj.getColumnCount();
	var initstr = " ";
	var col;
	var currow;
	var rows;
	try {
		rows = gridobj.getRowsNum();
		var selid = gridobj.getSelectedId();
		if (selid != null)
			currow = gridobj.getRowIndex(gridobj.getSelectedId());
		else
			currow = -1;
	} catch (e) {
		rows = 0;
		currow = 0;
	}
	if ((currow == rows - 1)) {
		for (col = 0; col < cols; col++) {
			if (col == 0)
				initstr = initstr + (rows + 1);
			else
				initstr = initstr + ",";
		}
		initstr = initstr.substr(1, initstr.length - 1);
		gridobj.addRow(rows + 1, initstr);
	}
}

function GetXMLString(gridobj) {
	var colCount;
	gridobj.editStop();
	var xmlstr = "<rows>";
	for (var i = 0; i < gridobj.getRowsNum(); i++) {
		xmlstr = xmlstr + "<row>";
		colCount = 0;
		for (var j = 0; j < gridobj.getColumnCount(); j++) {
			xmlstr = xmlstr + "<cell" + colCount + ">"
					+ gridobj.cells(gridobj.getRowId(i), j).getValue()
					+ "</cell" + colCount + ">";
			colCount = colCount + 1;
		}
		xmlstr = xmlstr + "</row>";
	}
	xmlstr = xmlstr + "</rows>";
	return xmlstr;
}

function setGridFocus(grid, gridrow, gridcol) {
	grid.editStop();
	grid.setSelectedRow(gridrow);
	grid.selectCell(grid.row, gridcol);
	grid.editCell();
}
function getOneSelectedRecord(gridVariable) {
	var ros = EMPTY_STRING;
	ros = gridVariable.getCheckedRows(0);
	var rosaerr = ros.split(',');
	if (ros == EMPTY_STRING) {
		return -1;
	} else {
		if (rosaerr.length > 1) {
			return -2;
		} else {
			return rosaerr[0];
		}
	}
}
function GridKeyDownF2(gridObj, row, column) {
}
function GridKeyDownF5(gridObj, row, column) {
}
function GridKeyDownF12(gridObj) {
}
/** GRID FUNCTION END * */

/** CALENDAR SCRIPT BEGIN * */

var turnOffYearSpan = false; // true = Only show This Year and Next, false =
								// show +/- 5 years
var weekStartsOnSunday = false; // true = Start the week on Sunday, false =
								// start the week on Monday
var showWeekNumber = false; // true = show week number, false = do not show week
							// number

var languageCode = "en"; // Possible values: en,ge,no,nl,es,pt-br,fr
// en = english, ge = german, no = norwegian,nl = dutch, es = spanish, pt-br =
// portuguese, fr = french, da = danish, hu = hungarian(Use UTF-8 doctype for
// hungarian)

var calendar_display_time = false;
var todayStringFormat = '[todayString] [UCFdayString]. [day]. [monthString] [year]';
var pathToImages = 'images/'; // Relative to your HTML file

var speedOfSelectBoxSliding = 200; // Milliseconds between changing year and
									// hour when holding mouse over "-" and "+"
									// - lower value = faster
var intervalSelectBox_minutes = 5; // Minute select box - interval between each
									// option (5 = default)

var calendar_offsetTop = 0; // Offset - calendar placement - You probably have
							// to modify this value if you're not using a strict
							// doctype
var calendar_offsetLeft = 0; // Offset - calendar placement - You probably
								// have to modify this value if you're not using
								// a strict doctype
var calendarDiv = false;

var MSIE = false;
var Opera = false;
if (navigator.userAgent.indexOf('MSIE') >= 0
		&& navigator.userAgent.indexOf('Opera') < 0)
	MSIE = true;
if (navigator.userAgent.indexOf('Opera') >= 0)
	Opera = true;

var monthArray = [ 'January', 'February', 'March', 'April', 'May', 'June',
		'July', 'August', 'September', 'October', 'November', 'December' ];
var monthArrayShort = [ 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug',
		'Sep', 'Oct', 'Nov', 'Dec' ];
var dayArray = [ 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
var weekString = 'Week';
var todayString = '';

if (weekStartsOnSunday) {
	var tempDayName = dayArray[6];
	for (var theIx = 6; theIx > 0; theIx--) {
		dayArray[theIx] = dayArray[theIx - 1];
	}
	dayArray[0] = tempDayName;
}

var daysInMonthArray = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
var currentMonth;
var currentYear;
var currentHour;
var currentMinute;
var calendarContentDiv;
var returnDateTo;
var returnFormat;
var activeSelectBoxMonth;
var activeSelectBoxYear;
var activeSelectBoxHour;
var activeSelectBoxMinute;

var iframeObj = false;
// // fix for EI frame problem on time dropdowns 09/30/2006
var iframeObj2 = false;
function EIS_FIX_EI1(where2fixit) {

	if (!iframeObj2)
		return;
	iframeObj2.style.display = 'block';
	iframeObj2.style.height = document.getElementById(where2fixit).offsetHeight + 1;
	iframeObj2.style.width = document.getElementById(where2fixit).offsetWidth;
	iframeObj2.style.left = getleftPos(document.getElementById(where2fixit))
			+ 1 - calendar_offsetLeft;
	iframeObj2.style.top = getTopPos(document.getElementById(where2fixit))
			- document.getElementById(where2fixit).offsetHeight
			- calendar_offsetTop;
}

function EIS_Hide_Frame() {
	if (iframeObj2)
		iframeObj2.style.display = 'none';
}
// // fix for EI frame problem on time dropdowns 09/30/2006
var returnDateToYear;
var returnDateToMonth;
var returnDateToDay;
var returnDateToHour;
var returnDateToMinute;

var inputYear;
var inputMonth;
var inputDay;
var inputHour;
var inputMinute;
var calendarDisplayTime = false;

var selectBoxHighlightColor = '#D60808'; // Highlight color of select boxes
var selectBoxRolloverBgColor = '#E2EBED'; // Background color on drop down
											// lists(rollover)

var selectBoxMovementInProgress = false;
var activeSelectBox = false;

function cancelCalendarEvent() {
	return false;
}
function isLeapYear(inputYear) {
	if (inputYear % 400 == 0 || (inputYear % 4 == 0 && inputYear % 100 != 0))
		return true;
	return false;

}
var activeSelectBoxMonth = false;
var activeSelectBoxDirection = false;

function highlightMonthYear() {
	if (activeSelectBoxMonth)
		activeSelectBoxMonth.className = '';
	activeSelectBox = this;

	if (this.className == 'monthYearActive') {
		this.className = '';
	} else {
		this.className = 'monthYearActive';
		activeSelectBoxMonth = this;
	}

	if (this.innerHTML.indexOf('-') >= 0 || this.innerHTML.indexOf('+') >= 0) {
		if (this.className == 'monthYearActive')
			selectBoxMovementInProgress = true;
		else
			selectBoxMovementInProgress = false;
		if (this.innerHTML.indexOf('-') >= 0)
			activeSelectBoxDirection = -1;
		else
			activeSelectBoxDirection = 1;

	} else
		selectBoxMovementInProgress = false;

}

function showMonthDropDown() {
	if (document.getElementById('monthDropDown').style.display == 'block') {
		document.getElementById('monthDropDown').style.display = 'none';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		EIS_Hide_Frame();
	} else {
		document.getElementById('monthDropDown').style.display = 'block';
		document.getElementById('yearDropDown').style.display = 'none';
		document.getElementById('hourDropDown').style.display = 'none';
		document.getElementById('minuteDropDown').style.display = 'none';
		if (MSIE) {
			EIS_FIX_EI1('monthDropDown');
		}
		// // fix for EI frame problem on time dropdowns 09/30/2006

	}
}

function showYearDropDown() {
	if (document.getElementById('yearDropDown').style.display == 'block') {
		document.getElementById('yearDropDown').style.display = 'none';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		EIS_Hide_Frame();
	} else {
		document.getElementById('yearDropDown').style.display = 'block';
		document.getElementById('monthDropDown').style.display = 'none';
		document.getElementById('hourDropDown').style.display = 'none';
		document.getElementById('minuteDropDown').style.display = 'none';
		if (MSIE) {
			EIS_FIX_EI1('yearDropDown');
		}
		// // fix for EI frame problem on time dropdowns 09/30/2006

	}

}
function showHourDropDown() {
	if (document.getElementById('hourDropDown').style.display == 'block') {
		document.getElementById('hourDropDown').style.display = 'none';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		EIS_Hide_Frame();
	} else {
		document.getElementById('hourDropDown').style.display = 'block';
		document.getElementById('monthDropDown').style.display = 'none';
		document.getElementById('yearDropDown').style.display = 'none';
		document.getElementById('minuteDropDown').style.display = 'none';
		if (MSIE) {
			EIS_FIX_EI1('hourDropDown');
		}
		// // fix for EI frame problem on time dropdowns 09/30/2006
	}

}
function showMinuteDropDown() {
	if (document.getElementById('minuteDropDown').style.display == 'block') {
		document.getElementById('minuteDropDown').style.display = 'none';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		EIS_Hide_Frame();
	} else {
		document.getElementById('minuteDropDown').style.display = 'block';
		document.getElementById('monthDropDown').style.display = 'none';
		document.getElementById('yearDropDown').style.display = 'none';
		document.getElementById('hourDropDown').style.display = 'none';
		if (MSIE) {
			EIS_FIX_EI1('minuteDropDown');
		}
		// // fix for EI frame problem on time dropdowns 09/30/2006
	}

}

function selectMonth() {
	document.getElementById('calendar_month_txt').innerHTML = this.innerHTML;
	currentMonth = this.id.replace(/[^\d]/g, '');

	document.getElementById('monthDropDown').style.display = 'none';
	// // fix for EI frame problem on time dropdowns 09/30/2006
	EIS_Hide_Frame();
	for (var no = 0; no < monthArray.length; no++) {
		document.getElementById('monthDiv_' + no).style.color = '';
	}
	this.style.color = selectBoxHighlightColor;
	activeSelectBoxMonth = this;
	writeCalendarContent();

}

function selectHour() {
	document.getElementById('calendar_hour_txt').innerHTML = this.innerHTML;
	currentHour = this.innerHTML.replace(/[^\d]/g, '');
	document.getElementById('hourDropDown').style.display = 'none';
	// // fix for EI frame problem on time dropdowns 09/30/2006
	EIS_Hide_Frame();
	if (activeSelectBoxHour) {
		activeSelectBoxHour.style.color = '';
	}
	activeSelectBoxHour = this;
	this.style.color = selectBoxHighlightColor;
}

function selectMinute() {
	document.getElementById('calendar_minute_txt').innerHTML = this.innerHTML;
	currentMinute = this.innerHTML.replace(/[^\d]/g, '');
	document.getElementById('minuteDropDown').style.display = 'none';
	// // fix for EI frame problem on time dropdowns 09/30/2006
	EIS_Hide_Frame();
	if (activeSelectBoxMinute) {
		activeSelectBoxMinute.style.color = '';
	}
	activeSelectBoxMinute = this;
	this.style.color = selectBoxHighlightColor;
}

function selectYear() {
	document.getElementById('calendar_year_txt').innerHTML = this.innerHTML;
	currentYear = this.innerHTML.replace(/[^\d]/g, '');
	document.getElementById('yearDropDown').style.display = 'none';
	// // fix for EI frame problem on time dropdowns 09/30/2006
	EIS_Hide_Frame();
	if (activeSelectBoxYear) {
		activeSelectBoxYear.style.color = '';
	}
	activeSelectBoxYear = this;
	this.style.color = selectBoxHighlightColor;
	writeCalendarContent();

}

function switchMonth() {
	if (this.src.indexOf('left') >= 0) {
		currentMonth = currentMonth - 1;
		;
		if (currentMonth < 0) {
			currentMonth = 11;
			currentYear = currentYear - 1;
		}
	} else {
		currentMonth = currentMonth + 1;
		;
		if (currentMonth > 11) {
			currentMonth = 0;
			currentYear = currentYear / 1 + 1;
		}
	}

	writeCalendarContent();

}

function createMonthDiv() {
	var div = document.createElement('DIV');
	div.className = 'monthYearPicker';
	div.id = 'monthPicker';

	for (var no = 0; no < monthArray.length; no++) {
		var subDiv = document.createElement('DIV');
		subDiv.innerHTML = monthArray[no];
		subDiv.onmouseover = highlightMonthYear;
		subDiv.onmouseout = highlightMonthYear;
		subDiv.onclick = selectMonth;
		subDiv.id = 'monthDiv_' + no;
		subDiv.style.width = '56px';
		subDiv.onselectstart = cancelCalendarEvent;
		div.appendChild(subDiv);
		if (currentMonth && currentMonth == no) {
			subDiv.style.color = selectBoxHighlightColor;
			activeSelectBoxMonth = subDiv;
		}

	}
	return div;

}

function changeSelectBoxYear(e, inputObj) {
	if (!inputObj)
		inputObj = this;
	var yearItems = inputObj.parentNode.getElementsByTagName('DIV');
	var startYear = null;
	if (inputObj.innerHTML.indexOf('-') >= 0) {
		if (yearItems[1].innerHTML / 1 == parseInt(1900)) {
			startYear = '1900';
		} else {
			startYear = yearItems[1].innerHTML / 1 - 1;
		}
		if (activeSelectBoxYear) {
			activeSelectBoxYear.style.color = '';
		}
	} else {
		startYear = yearItems[1].innerHTML / 1 + 1;
		if (activeSelectBoxYear) {
			activeSelectBoxYear.style.color = '';

		}
	}

	for (var no = 1; no < yearItems.length - 1; no++) {
		yearItems[no].innerHTML = startYear + no - 1;
		yearItems[no].id = 'yearDiv' + (startYear / 1 + no / 1 - 1);

	}
	if (activeSelectBoxYear) {
		activeSelectBoxYear.style.color = '';
		if (document.getElementById('yearDiv' + currentYear)) {
			activeSelectBoxYear = document.getElementById('yearDiv'
					+ currentYear);
			activeSelectBoxYear.style.color = selectBoxHighlightColor;
			;
		}
	}
}
function changeSelectBoxHour(e, inputObj) {
	if (!inputObj)
		inputObj = this;

	var hourItems = inputObj.parentNode.getElementsByTagName('DIV');
	if (inputObj.innerHTML.indexOf('-') >= 0) {
		var startHour = hourItems[1].innerHTML / 1 - 1;
		if (startHour < 0)
			startHour = 0;
		if (activeSelectBoxHour) {
			activeSelectBoxHour.style.color = '';
		}
	} else {
		var startHour = hourItems[1].innerHTML / 1 + 1;
		if (startHour > 14)
			startHour = 14;
		if (activeSelectBoxHour) {
			activeSelectBoxHour.style.color = '';

		}
	}
	var prefix = '';
	for (var no = 1; no < hourItems.length - 1; no++) {
		if ((startHour / 1 + no / 1) < 11)
			prefix = '0';
		else
			prefix = '';
		hourItems[no].innerHTML = prefix + (startHour + no - 1);

		hourItems[no].id = 'hourDiv' + (startHour / 1 + no / 1 - 1);

	}
	if (activeSelectBoxHour) {
		activeSelectBoxHour.style.color = '';
		if (document.getElementById('hourDiv' + currentHour)) {
			activeSelectBoxHour = document.getElementById('hourDiv'
					+ currentHour);
			activeSelectBoxHour.style.color = selectBoxHighlightColor;
			;
		}
	}
}

function updateYearDiv() {
	var yearSpan = 5;
	if (turnOffYearSpan) {
		yearSpan = 0;
	}
	var div = document.getElementById('yearDropDown');
	var yearItems = div.getElementsByTagName('DIV');
	for (var no = 1; no < yearItems.length - 1; no++) {
		yearItems[no].innerHTML = currentYear / 1 - yearSpan + no;
		if (currentYear == (currentYear / 1 - yearSpan + no)) {
			yearItems[no].style.color = selectBoxHighlightColor;
			activeSelectBoxYear = yearItems[no];
		} else {
			yearItems[no].style.color = '';
		}
	}
}

function updateMonthDiv() {
	for (no = 0; no < 12; no++) {
		document.getElementById('monthDiv_' + no).style.color = '';
	}
	document.getElementById('monthDiv_' + currentMonth).style.color = selectBoxHighlightColor;
	activeSelectBoxMonth = document.getElementById('monthDiv_' + currentMonth);
}

function updateHourDiv() {
	var div = document.getElementById('hourDropDown');
	var hourItems = div.getElementsByTagName('DIV');

	var addHours = 0;
	if ((currentHour / 1 - 6 + 1) < 0) {
		addHours = (currentHour / 1 - 6 + 1) * -1;
	}
	for (var no = 1; no < hourItems.length - 1; no++) {
		var prefix = '';
		if ((currentHour / 1 - 6 + no + addHours) < 10)
			prefix = '0';
		hourItems[no].innerHTML = prefix
				+ (currentHour / 1 - 6 + no + addHours);
		if (currentHour == (currentHour / 1 - 6 + no)) {
			hourItems[no].style.color = selectBoxHighlightColor;
			activeSelectBoxHour = hourItems[no];
		} else {
			hourItems[no].style.color = '';
		}
	}
}

function updateMinuteDiv() {
	for (no = 0; no < 60; no += intervalSelectBox_minutes) {
		var prefix = '';
		if (no < 10)
			prefix = '0';

		document.getElementById('minuteDiv_' + prefix + no).style.color = '';
	}
	if (document.getElementById('minuteDiv_' + currentMinute)) {
		document.getElementById('minuteDiv_' + currentMinute).style.color = selectBoxHighlightColor;
		activeSelectBoxMinute = document.getElementById('minuteDiv_'
				+ currentMinute);
	}
}

function createYearDiv() {

	if (!document.getElementById('yearDropDown')) {
		var div = document.createElement('DIV');
		div.className = 'monthYearPicker';
	} else {
		var div = document.getElementById('yearDropDown');
		var subDivs = div.getElementsByTagName('DIV');
		for (var no = 0; no < subDivs.length; no++) {
			subDivs[no].parentNode.removeChild(subDivs[no]);
		}
	}

	var d = new Date();
	if (currentYear) {
		d.setFullYear(currentYear);
	}

	var startYear = d.getFullYear() / 1 - 5;

	var yearSpan = 10;
	if (!turnOffYearSpan) {
		var subDiv = document.createElement('DIV');
		subDiv.innerHTML = '&nbsp;&nbsp;- ';
		subDiv.onclick = changeSelectBoxYear;
		subDiv.onmouseover = highlightMonthYear;
		subDiv.onmouseout = function() {
			selectBoxMovementInProgress = false;
		};
		subDiv.onselectstart = cancelCalendarEvent;
		div.appendChild(subDiv);
	} else {
		startYear = d.getFullYear() / 1 - 0;
		yearSpan = 2;
	}

	for (var no = startYear; no < (startYear + yearSpan); no++) {
		var subDiv = document.createElement('DIV');
		subDiv.innerHTML = no;
		subDiv.onmouseover = highlightMonthYear;
		subDiv.onmouseout = highlightMonthYear;
		subDiv.onclick = selectYear;
		subDiv.id = 'yearDiv' + no;
		subDiv.onselectstart = cancelCalendarEvent;
		div.appendChild(subDiv);
		if (currentYear && currentYear == no) {
			subDiv.style.color = selectBoxHighlightColor;
			activeSelectBoxYear = subDiv;
		}
	}
	if (!turnOffYearSpan) {
		var subDiv = document.createElement('DIV');
		subDiv.innerHTML = '&nbsp;&nbsp;+ ';
		subDiv.onclick = changeSelectBoxYear;
		subDiv.onmouseover = highlightMonthYear;
		subDiv.onmouseout = function() {
			selectBoxMovementInProgress = false;
		};
		subDiv.onselectstart = cancelCalendarEvent;
		div.appendChild(subDiv);
	}
	return div;
}

/* This function creates the hour div at the bottom bar */

function slideCalendarSelectBox() {
	if (selectBoxMovementInProgress) {
		if (activeSelectBox.parentNode.id == 'hourDropDown') {
			changeSelectBoxHour(false, activeSelectBox);
		}
		if (activeSelectBox.parentNode.id == 'yearDropDown') {
			changeSelectBoxYear(false, activeSelectBox);
		}

	}
	setTimeout('slideCalendarSelectBox()', speedOfSelectBoxSliding);

}

function createHourDiv() {
	if (!document.getElementById('hourDropDown')) {
		var div = document.createElement('DIV');
		div.className = 'monthYearPicker';
	} else {
		var div = document.getElementById('hourDropDown');
		var subDivs = div.getElementsByTagName('DIV');
		for (var no = 0; no < subDivs.length; no++) {
			subDivs[no].parentNode.removeChild(subDivs[no]);
		}
	}

	if (!currentHour)
		currentHour = 0;
	var startHour = currentHour / 1;
	if (startHour > 14)
		startHour = 14;

	var subDiv = document.createElement('DIV');
	subDiv.innerHTML = '&nbsp;&nbsp;- ';
	subDiv.onclick = changeSelectBoxHour;
	subDiv.onmouseover = highlightMonthYear;
	subDiv.onmouseout = function() {
		selectBoxMovementInProgress = false;
	};
	subDiv.onselectstart = cancelCalendarEvent;
	div.appendChild(subDiv);

	for (var no = startHour; no < startHour + 10; no++) {
		var prefix = '';
		if (no / 1 < 10)
			prefix = '0';
		var subDiv = document.createElement('DIV');
		subDiv.innerHTML = prefix + no;
		subDiv.onmouseover = highlightMonthYear;
		subDiv.onmouseout = highlightMonthYear;
		subDiv.onclick = selectHour;
		subDiv.id = 'hourDiv' + no;
		subDiv.onselectstart = cancelCalendarEvent;
		div.appendChild(subDiv);
		if (currentYear && currentYear == no) {
			subDiv.style.color = selectBoxHighlightColor;
			activeSelectBoxYear = subDiv;
		}
	}
	var subDiv = document.createElement('DIV');
	subDiv.innerHTML = '&nbsp;&nbsp;+ ';
	subDiv.onclick = changeSelectBoxHour;
	subDiv.onmouseover = highlightMonthYear;
	subDiv.onmouseout = function() {
		selectBoxMovementInProgress = false;
	};
	subDiv.onselectstart = cancelCalendarEvent;
	div.appendChild(subDiv);

	return div;
}
/* This function creates the minute div at the bottom bar */

function createMinuteDiv() {
	if (!document.getElementById('minuteDropDown')) {
		var div = document.createElement('DIV');
		div.className = 'monthYearPicker';
	} else {
		var div = document.getElementById('minuteDropDown');
		var subDivs = div.getElementsByTagName('DIV');
		for (var no = 0; no < subDivs.length; no++) {
			subDivs[no].parentNode.removeChild(subDivs[no]);
		}
	}
	var startMinute = 0;
	var prefix = '';
	for (var no = startMinute; no < 60; no += intervalSelectBox_minutes) {

		if (no < 10)
			prefix = '0';
		else
			prefix = '';
		var subDiv = document.createElement('DIV');
		subDiv.innerHTML = prefix + no;
		subDiv.onmouseover = highlightMonthYear;
		subDiv.onmouseout = highlightMonthYear;
		subDiv.onclick = selectMinute;
		subDiv.id = 'minuteDiv_' + prefix + no;
		subDiv.onselectstart = cancelCalendarEvent;
		div.appendChild(subDiv);
		if (currentYear && currentYear == no) {
			subDiv.style.color = selectBoxHighlightColor;
			activeSelectBoxYear = subDiv;
		}
	}
	return div;
}

function highlightSelect() {

	if (this.className == 'selectBoxTime') {
		this.className = 'selectBoxTimeOver';
		this.getElementsByTagName('IMG')[0].src = pathToImages
				+ 'down_time_over.gif';
	} else if (this.className == 'selectBoxTimeOver') {
		this.className = 'selectBoxTime';
		this.getElementsByTagName('IMG')[0].src = pathToImages
				+ 'down_time.gif';
	}

	if (this.className == 'selectBox') {
		this.className = 'selectBoxOver';
		this.getElementsByTagName('IMG')[0].src = pathToImages
				+ 'down_over.gif';
	} else if (this.className == 'selectBoxOver') {
		this.className = 'selectBox';
		this.getElementsByTagName('IMG')[0].src = pathToImages
				+ 'down_over.gif';
	}

}

function highlightArrow() {
	if (this.src.indexOf('over') >= 0) {
		if (this.src.indexOf('left') >= 0)
			this.src = pathToImages + 'left_over.gif';
		if (this.src.indexOf('right') >= 0)
			this.src = pathToImages + 'right_over.gif';
	} else {
		if (this.src.indexOf('left') >= 0)
			this.src = pathToImages + 'left_over.gif';
		if (this.src.indexOf('right') >= 0)
			this.src = pathToImages + 'right_over.gif';
	}
}

function highlightClose() {
	if (this.src.indexOf('over') >= 0) {
		this.src = pathToImages + 'close_over.gif';
	} else {
		this.src = pathToImages + 'close_over.gif';
	}

}

function closeCalendar() {

	document.getElementById('yearDropDown').style.display = 'none';
	document.getElementById('monthDropDown').style.display = 'none';
	document.getElementById('hourDropDown').style.display = 'none';
	document.getElementById('minuteDropDown').style.display = 'none';

	calendarDiv.style.display = 'none';
	if (iframeObj) {
		iframeObj.style.display = 'none';
		// // //// fix for EI frame problem on time dropdowns 09/30/2006
		EIS_Hide_Frame();
	}
	if (activeSelectBoxMonth)
		activeSelectBoxMonth.className = '';
	if (activeSelectBoxYear)
		activeSelectBoxYear.className = '';

}

function writeTopBar() {

	var topBar = document.createElement('DIV');
	topBar.className = 'topBar';
	topBar.id = 'topBar';
	calendarDiv.appendChild(topBar);

	// Left arrow
	var leftDiv = document.createElement('DIV');
	leftDiv.style.marginRight = '1px';
	var img = document.createElement('IMG');
	img.src = pathToImages + 'left_over.gif';
	img.onmouseover = highlightArrow;
	img.onclick = switchMonth;
	img.onmouseout = highlightArrow;
	leftDiv.appendChild(img);
	topBar.appendChild(leftDiv);
	if (Opera)
		leftDiv.style.width = '16px';

	// Right arrow
	var rightDiv = document.createElement('DIV');
	rightDiv.style.marginRight = '1px';
	var img = document.createElement('IMG');
	img.src = pathToImages + 'right_over.gif';
	img.onclick = switchMonth;
	img.onmouseover = highlightArrow;
	img.onmouseout = highlightArrow;
	rightDiv.appendChild(img);
	if (Opera)
		rightDiv.style.width = '16px';
	topBar.appendChild(rightDiv);

	// Month selector
	var monthDiv = document.createElement('DIV');
	monthDiv.id = 'monthSelect';
	monthDiv.onmouseover = highlightSelect;
	monthDiv.onmouseout = highlightSelect;
	monthDiv.onclick = showMonthDropDown;
	var span = document.createElement('SPAN');
	span.innerHTML = monthArray[currentMonth];
	span.id = 'calendar_month_txt';
	monthDiv.appendChild(span);

	var img = document.createElement('IMG');
	img.src = pathToImages + 'down_over.gif';
	img.style.position = 'absolute';
	img.style.right = '0px';
	monthDiv.appendChild(img);
	monthDiv.className = 'selectBox';
	if (Opera) {
		img.style.cssText = 'float:right;position:relative';
		img.style.position = 'relative';
		img.style.styleFloat = 'right';
	}
	topBar.appendChild(monthDiv);

	var monthPicker = createMonthDiv();
	monthPicker.style.left = '37px';
	monthPicker.style.top = monthDiv.offsetTop + monthDiv.offsetHeight + 1
			+ 'px';
	monthPicker.style.width = '60px';
	monthPicker.id = 'monthDropDown';

	calendarDiv.appendChild(monthPicker);

	// Year selector
	var yearDiv = document.createElement('DIV');
	yearDiv.onmouseover = highlightSelect;
	yearDiv.onmouseout = highlightSelect;
	yearDiv.onclick = showYearDropDown;
	var span = document.createElement('SPAN');
	span.innerHTML = currentYear;
	span.id = 'calendar_year_txt';
	yearDiv.appendChild(span);
	topBar.appendChild(yearDiv);

	var img = document.createElement('IMG');
	img.src = pathToImages + 'down_over.gif';
	yearDiv.appendChild(img);
	yearDiv.className = 'selectBox';

	if (Opera) {
		yearDiv.style.width = '50px';
		img.style.cssText = 'float:right';
		img.style.position = 'relative';
		img.style.styleFloat = 'right';
	}

	var yearPicker = createYearDiv();
	yearPicker.style.left = '113px';
	yearPicker.style.top = monthDiv.offsetTop + monthDiv.offsetHeight + 1
			+ 'px';
	yearPicker.style.width = '35px';
	yearPicker.id = 'yearDropDown';
	calendarDiv.appendChild(yearPicker);

	var img = document.createElement('IMG');
	img.src = pathToImages + 'close_over.gif';
	img.style.styleFloat = 'right';
	img.onmouseover = highlightClose;
	img.onmouseout = highlightClose;
	img.onclick = closeCalendar;
	topBar.appendChild(img);
	if (!document.all) {
		img.style.position = 'absolute';
		img.style.right = '2px';
	}
}

function writeCalendarContent() {
	var calendarContentDivExists = true;
	if (!calendarContentDiv) {
		calendarContentDiv = document.createElement('DIV');
		calendarDiv.appendChild(calendarContentDiv);
		calendarContentDivExists = false;
	}
	currentMonth = currentMonth / 1;
	var d = new Date();

	d.setFullYear(currentYear);
	d.setDate(1);
	d.setMonth(currentMonth);

	var dayStartOfMonth = d.getDay();
	if (!weekStartsOnSunday) {
		if (dayStartOfMonth == 0)
			dayStartOfMonth = 7;
		dayStartOfMonth--;
	}

	document.getElementById('calendar_year_txt').innerHTML = currentYear;
	document.getElementById('calendar_month_txt').innerHTML = monthArray[currentMonth];
	document.getElementById('calendar_hour_txt').innerHTML = currentHour / 1 > 9 ? currentHour
			: '0' + currentHour;
	document.getElementById('calendar_minute_txt').innerHTML = currentMinute / 1 > 9 ? currentMinute
			: '0' + currentMinute;

	var existingTable = calendarContentDiv.getElementsByTagName('TABLE');
	if (existingTable.length > 0) {
		calendarContentDiv.removeChild(existingTable[0]);
	}

	var calTable = document.createElement('TABLE');
	calTable.width = '100%';
	calTable.cellSpacing = '0';
	calendarContentDiv.appendChild(calTable);

	var calTBody = document.createElement('TBODY');
	calTable.appendChild(calTBody);
	var row = calTBody.insertRow(-1);
	row.className = 'calendar_week_row';
	if (showWeekNumber) {
		var cell = row.insertCell(-1);
		cell.innerHTML = weekString;
		cell.className = 'calendar_week_column';
		cell.style.backgroundColor = selectBoxRolloverBgColor;
	}

	for (var no = 0; no < dayArray.length; no++) {
		var cell = row.insertCell(-1);
		cell.innerHTML = dayArray[no];
	}

	var row = calTBody.insertRow(-1);

	if (showWeekNumber) {
		var cell = row.insertCell(-1);
		cell.className = 'calendar_week_column';
		cell.style.backgroundColor = selectBoxRolloverBgColor;
		var week = getWeek(currentYear, currentMonth, 1);
		cell.innerHTML = week; // Week
	}
	for (var no = 0; no < dayStartOfMonth; no++) {
		var cell = row.insertCell(-1);
		cell.innerHTML = '&nbsp;';
	}

	var colCounter = dayStartOfMonth;
	var daysInMonth = daysInMonthArray[currentMonth];
	if (daysInMonth == 28) {
		if (isLeapYear(currentYear))
			daysInMonth = 29;
	}

	for (var no = 1; no <= daysInMonth; no++) {
		d.setDate(no - 1);
		if (colCounter > 0 && colCounter % 7 == 0) {
			var row = calTBody.insertRow(-1);
			if (showWeekNumber) {
				var cell = row.insertCell(-1);
				cell.className = 'calendar_week_column';
				var week = getWeek(currentYear, currentMonth, no);
				cell.innerHTML = week; // Week
				cell.style.backgroundColor = selectBoxRolloverBgColor;
			}
		}
		var cell = row.insertCell(-1);
		if (currentYear == inputYear && currentMonth == inputMonth
				&& no == inputDay) {
			cell.className = 'activeDay';
		}
		cell.innerHTML = no;
		cell.onclick = pickDate;
		colCounter++;
	}

	if (!document.all) {
		if (calendarContentDiv.offsetHeight)
			document.getElementById('topBar').style.top = calendarContentDiv.offsetHeight
					+ document.getElementById('timeBar').offsetHeight
					+ document.getElementById('topBar').offsetHeight - 1 + 'px';
		else {
			document.getElementById('topBar').style.top = '';
			document.getElementById('topBar').style.bottom = '0px';
		}

	}

	if (iframeObj) {
		if (!calendarContentDivExists)
			setTimeout('resizeIframe()', 350);
		else
			setTimeout('resizeIframe()', 10);
	}

}

function resizeIframe() {
	iframeObj.style.width = calendarDiv.offsetWidth + 'px';
	iframeObj.style.height = calendarDiv.offsetHeight + 'px';

}

function pickTodaysDate() {
	var d = new Date();
	currentMonth = d.getMonth();
	currentYear = d.getFullYear();
	pickDate(false, d.getDate());

}

function pickDate(e, inputDay) {
	var month = currentMonth / 1 + 1;
	if (month < 10)
		month = '0' + month;
	var day;
	if (!inputDay && this)
		day = this.innerHTML;
	else
		day = inputDay;

	if (day / 1 < 10)
		day = '0' + day;
	if (returnFormat) {
		returnFormat = returnFormat.replace('dd', day);
		returnFormat = returnFormat.replace('mm', month);
		returnFormat = returnFormat.replace('yyyy', currentYear);
		returnFormat = returnFormat.replace('hh', currentHour);
		returnFormat = returnFormat.replace('ii', currentMinute);
		returnFormat = returnFormat.replace('d', day / 1);
		returnFormat = returnFormat.replace('m', month / 1);

		returnDateTo.value = returnFormat;
		try {
			returnDateTo.onchange();
		} catch (e) {

		}
	} else {
		for (var no = 0; no < returnDateToYear.options.length; no++) {
			if (returnDateToYear.options[no].value == currentYear) {
				returnDateToYear.selectedIndex = no;
				break;
			}
		}
		for (var no = 0; no < returnDateToMonth.options.length; no++) {
			if (returnDateToMonth.options[no].value == parseFloat(month)) {
				returnDateToMonth.selectedIndex = no;
				break;
			}
		}
		for (var no = 0; no < returnDateToDay.options.length; no++) {
			if (returnDateToDay.options[no].value == parseFloat(day)) {
				returnDateToDay.selectedIndex = no;
				break;
			}
		}
		if (calendarDisplayTime) {
			for (var no = 0; no < returnDateToHour.options.length; no++) {
				if (returnDateToHour.options[no].value == parseFloat(currentHour)) {
					returnDateToHour.selectedIndex = no;
					break;
				}
			}
			for (var no = 0; no < returnDateToMinute.options.length; no++) {
				if (returnDateToMinute.options[no].value == parseFloat(currentMinute)) {
					returnDateToMinute.selectedIndex = no;
					break;
				}
			}
		}
	}
	closeCalendar();
	returnDateTo.focus();
}

// This function is from http://www.codeproject.com/csharp/gregorianwknum.asp
// Only changed the month add
function getWeek(year, month, day) {
	if (!weekStartsOnSunday) {
		day = (day / 1);
	} else {
		day = (day / 1) + 1;
	}
	year = year / 1;
	month = month / 1 + 1; // use 1-12
	var a = Math.floor((14 - (month)) / 12);
	var y = year + 4800 - a;
	var m = (month) + (12 * a) - 3;
	var jd = day + Math.floor(((153 * m) + 2) / 5) + (365 * y)
			+ Math.floor(y / 4) - Math.floor(y / 100) + Math.floor(y / 400)
			- 32045; // (gregorian calendar)
	var d4 = (jd + 31741 - (jd % 7)) % 146097 % 36524 % 1461;
	var L = Math.floor(d4 / 1460);
	var d1 = ((d4 - L) % 365) + L;
	NumberOfWeek = Math.floor(d1 / 7) + 1;
	return NumberOfWeek;
}

function writeTimeBar() {
	var timeBar = document.createElement('DIV');
	timeBar.id = 'timeBar';
	timeBar.className = 'timeBar';

	var subDiv = document.createElement('DIV');
	subDiv.innerHTML = 'Time:';

	// hour selector
	var hourDiv = document.createElement('DIV');
	hourDiv.onmouseover = highlightSelect;
	hourDiv.onmouseout = highlightSelect;
	hourDiv.onclick = showHourDropDown;
	hourDiv.style.width = '30px';
	var span = document.createElement('SPAN');
	span.innerHTML = currentHour;
	span.id = 'calendar_hour_txt';
	hourDiv.appendChild(span);
	timeBar.appendChild(hourDiv);

	var img = document.createElement('IMG');
	img.src = pathToImages + 'down_time.gif';
	hourDiv.appendChild(img);
	hourDiv.className = 'selectBoxTime';

	if (Opera) {
		hourDiv.style.width = '30px';
		img.style.cssText = 'float:right';
		img.style.position = 'relative';
		img.style.styleFloat = 'right';
	}

	var hourPicker = createHourDiv();
	hourPicker.style.left = '130px';
	hourPicker.style.width = '35px';
	hourPicker.id = 'hourDropDown';
	calendarDiv.appendChild(hourPicker);

	// Add Minute picker

	// Year selector
	var minuteDiv = document.createElement('DIV');
	minuteDiv.onmouseover = highlightSelect;
	minuteDiv.onmouseout = highlightSelect;
	minuteDiv.onclick = showMinuteDropDown;
	minuteDiv.style.width = '30px';
	var span = document.createElement('SPAN');
	span.innerHTML = currentMinute;

	span.id = 'calendar_minute_txt';
	minuteDiv.appendChild(span);
	timeBar.appendChild(minuteDiv);

	var img = document.createElement('IMG');
	img.src = pathToImages + 'down_time.gif';
	minuteDiv.appendChild(img);
	minuteDiv.className = 'selectBoxTime';

	if (Opera) {
		minuteDiv.style.width = '30px';
		img.style.cssText = 'float:right';
		img.style.position = 'relative';
		img.style.styleFloat = 'right';
	}

	var minutePicker = createMinuteDiv();
	minutePicker.style.left = '167px';
	// minutePicker.style.top = monthDiv.offsetTop + monthDiv.offsetHeight + 1 +
	// 'px';
	minutePicker.style.width = '35px';
	minutePicker.id = 'minuteDropDown';
	calendarDiv.appendChild(minutePicker);

	return timeBar;

}

function writeBottomBar() {
	var d = new Date();
	var bottomBar = document.createElement('DIV');

	bottomBar.id = 'bottomBar';

	bottomBar.style.cursor = 'pointer';
	bottomBar.className = 'todaysDate';
	// var todayStringFormat = '[todayString] [dayString] [day] [monthString]
	// [year]'; ;;

	var subDiv = document.createElement('DIV');
	subDiv.onclick = pickTodaysDate;
	subDiv.id = 'todaysDateString';
	subDiv.style.width = (calendarDiv.offsetWidth - 95) + 'px';
	var day = d.getDay();
	if (!weekStartsOnSunday) {
		if (day == 0)
			day = 7;
		day--;
	}

	var bottomString = todayStringFormat;
	bottomString = bottomString.replace('[monthString]', monthArrayShort[d
			.getMonth()]);
	bottomString = bottomString.replace('[day]', d.getDate());
	bottomString = bottomString.replace('[year]', d.getFullYear());
	bottomString = bottomString.replace('[dayString]', dayArray[day]
			.toLowerCase());
	bottomString = bottomString.replace('[UCFdayString]', dayArray[day]);
	bottomString = bottomString.replace('[todayString]', todayString);

	subDiv.innerHTML = todayString + ': ' + d.getDate() + '. '
			+ monthArrayShort[d.getMonth()] + ', ' + d.getFullYear();
	subDiv.innerHTML = bottomString;
	bottomBar.appendChild(subDiv);

	var timeDiv = writeTimeBar();
	bottomBar.appendChild(timeDiv);

	calendarDiv.appendChild(bottomBar);

}
function getTopPos(inputObj) {

	var returnValue = inputObj.offsetTop + inputObj.offsetHeight;
	while ((inputObj = inputObj.offsetParent) != null)
		returnValue += inputObj.offsetTop;
	return returnValue + calendar_offsetTop;
}

function getleftPos(inputObj) {
	var returnValue = inputObj.offsetLeft;
	while ((inputObj = inputObj.offsetParent) != null)
		returnValue += inputObj.offsetLeft;
	return returnValue + calendar_offsetLeft;
}

function positionCalendar(inputObj) {
	calendarDiv.style.left = getleftPos(inputObj) + 'px';
	calendarDiv.style.top = getTopPos(inputObj) + 'px';
	if (iframeObj) {
		iframeObj.style.left = calendarDiv.style.left;
		iframeObj.style.top = calendarDiv.style.top;
		// // fix for EI frame problem on time dropdowns 09/30/2006
		iframeObj2.style.left = calendarDiv.style.left;
		iframeObj2.style.top = calendarDiv.style.top;
	}

}

function initCalendar() {
	if (MSIE) {
		iframeObj = document.createElement('IFRAME');
		iframeObj.style.filter = 'alpha(opacity=0)';
		iframeObj.style.position = 'absolute';
		iframeObj.border = '0px';
		iframeObj.style.border = '0px';
		iframeObj.style.backgroundColor = '#FF0000';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		iframeObj2 = document.createElement('IFRAME');
		iframeObj2.style.position = 'absolute';
		iframeObj2.border = '0px';
		iframeObj2.style.border = '0px';
		iframeObj2.style.height = '1px';
		iframeObj2.style.width = '1px';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		// Added fixed for HTTPS
		iframeObj2.src = 'blank.html';
		iframeObj.src = 'blank.html';
		document.body.appendChild(iframeObj2); // gfb move this down AFTER the
												// .src is set
		document.body.appendChild(iframeObj);
	}

	calendarDiv = document.createElement('DIV');
	calendarDiv.id = 'calendarDiv';
	calendarDiv.style.zIndex = 1000;
	slideCalendarSelectBox();

	document.body.appendChild(calendarDiv);
	writeBottomBar();
	writeTopBar();

	if (!currentYear) {
		var d = new Date();
		currentMonth = d.getMonth();
		currentYear = d.getFullYear();
	}
	writeCalendarContent();

}

function setTimeProperties() {
	if (!calendarDisplayTime) {
		document.getElementById('timeBar').style.display = 'none';
		document.getElementById('timeBar').style.visibility = 'hidden';
		document.getElementById('todaysDateString').style.width = '100%';

	} else {
		document.getElementById('timeBar').style.display = 'block';
		document.getElementById('timeBar').style.visibility = 'visible';
		document.getElementById('hourDropDown').style.top = document
				.getElementById('calendar_minute_txt').parentNode.offsetHeight
				+ calendarContentDiv.offsetHeight
				+ document.getElementById('topBar').offsetHeight + 'px';
		document.getElementById('minuteDropDown').style.top = document
				.getElementById('calendar_minute_txt').parentNode.offsetHeight
				+ calendarContentDiv.offsetHeight
				+ document.getElementById('topBar').offsetHeight + 'px';
		document.getElementById('minuteDropDown').style.right = '50px';
		document.getElementById('hourDropDown').style.right = '50px';
		document.getElementById('todaysDateString').style.width = '115px';
	}
}
function calendarSortItems(a, b) {
	return a / 1 - b / 1;
}
function displayCalendar(inputField, format, buttonObj, displayTime, timeInput) {
	if (displayTime)
		calendarDisplayTime = true;
	else
		calendarDisplayTime = false;
	inputField.value = getCBD();
	if (inputField.value.length > 6) { // dates must have at least 6 digits...
		if (!inputField.value.match(/^[0-9]*?$/gi)) {

			var positionArray = new Object();
			positionArray.m = format.indexOf('mm');
			if (positionArray.m == -1)
				positionArray.m = format.indexOf('m');
			positionArray.d = format.indexOf('dd');
			if (positionArray.d == -1)
				positionArray.d = format.indexOf('d');
			positionArray.y = format.indexOf('yyyy');
			positionArray.h = format.indexOf('hh');
			positionArray.i = format.indexOf('ii');

			this.initialHour = '00';
			this.initialMinute = '00';
			var elements = [ 'y', 'm', 'd', 'h', 'i' ];
			var properties = [ 'currentYear', 'currentMonth', 'inputDay',
					'currentHour', 'currentMinute' ];
			var propertyLength = [ 4, 2, 2, 2, 2 ];
			for (var i = 0; i < elements.length; i++) {
				if (positionArray[elements[i]] >= 0) {
					window[properties[i]] = inputField.value.substr(
							positionArray[elements[i]], propertyLength[i]) / 1;
				}
			}
			currentMonth--;
		} else {
			var monthPos = format.indexOf('mm');
			currentMonth = inputField.value.substr(monthPos, 2) / 1 - 1;
			var yearPos = format.indexOf('yyyy');
			currentYear = inputField.value.substr(yearPos, 4);
			var dayPos = format.indexOf('dd');
			tmpDay = inputField.value.substr(dayPos, 2);

			var hourPos = format.indexOf('hh');
			if (hourPos >= 0) {
				tmpHour = inputField.value.substr(hourPos, 2);
				currentHour = tmpHour;
				if (currentHour.length == 1)
					currentHour = '0';
			} else {
				currentHour = '00';
			}
			var minutePos = format.indexOf('ii');
			if (minutePos >= 0) {
				tmpMinute = inputField.value.substr(minutePos, 2);
				currentMinute = tmpMinute;
			} else {
				currentMinute = '00';
			}
		}
	} else {
		var d = new Date();
		currentMonth = d.getMonth();
		currentYear = d.getFullYear();
		currentHour = '08';
		currentMinute = '00';
		inputDay = d.getDate() / 1;
	}

	inputYear = currentYear;
	inputMonth = currentMonth;

	if (!calendarDiv) {
		initCalendar();
	} else {
		if (calendarDiv.style.display == 'block') {
			closeCalendar();
			return false;
		}
		writeCalendarContent();
	}

	returnFormat = format;
	returnDateTo = inputField;
	positionCalendar(buttonObj);
	calendarDiv.style.visibility = 'visible';
	calendarDiv.style.display = 'block';
	if (iframeObj) {
		iframeObj.style.display = '';
		iframeObj.style.height = '140px';
		iframeObj.style.width = '195px';
		iframeObj2.style.display = '';
		iframeObj2.style.height = '140px';
		iframeObj2.style.width = '195px';
	}

	setTimeProperties();
	updateYearDiv();
	updateMonthDiv();
	updateMinuteDiv();
	updateHourDiv();
}

function displayCalendarSelectBox(yearInput, monthInput, dayInput, hourInput,
		minuteInput, buttonObj) {
	if (!hourInput)
		calendarDisplayTime = false;
	else
		calendarDisplayTime = true;

	currentMonth = monthInput.options[monthInput.selectedIndex].value / 1 - 1;
	currentYear = yearInput.options[yearInput.selectedIndex].value;
	if (hourInput) {
		currentHour = hourInput.options[hourInput.selectedIndex].value;
		inputHour = currentHour / 1;
	}
	if (minuteInput) {
		currentMinute = minuteInput.options[minuteInput.selectedIndex].value;
		inputMinute = currentMinute / 1;
	}

	inputYear = yearInput.options[yearInput.selectedIndex].value;
	inputMonth = monthInput.options[monthInput.selectedIndex].value / 1 - 1;
	inputDay = dayInput.options[dayInput.selectedIndex].value / 1;

	if (!calendarDiv) {
		initCalendar();
	} else {
		writeCalendarContent();
	}

	returnDateToYear = yearInput;
	returnDateToMonth = monthInput;
	returnDateToDay = dayInput;
	returnDateToHour = hourInput;
	returnDateToMinute = minuteInput;

	returnFormat = false;
	returnDateTo = false;
	positionCalendar(buttonObj);
	calendarDiv.style.visibility = 'visible';
	calendarDiv.style.display = 'block';
	if (iframeObj) {
		iframeObj.style.display = '';
		iframeObj.style.height = calendarDiv.offsetHeight + 'px';
		iframeObj.style.width = calendarDiv.offsetWidth + 'px';
		// // fix for EI frame problem on time dropdowns 09/30/2006
		iframeObj2.style.display = '';
		iframeObj2.style.height = calendarDiv.offsetHeight + 'px';
		iframeObj2.style.width = calendarDiv.offsetWidth + 'px';
	}
	setTimeProperties();
	updateYearDiv();
	updateMonthDiv();
	updateHourDiv();
	updateMinuteDiv();

}

/** CALENDAR SCRIPT END * */

/** RANDOM PASSWORD GENERATION BEGIN * */

function randomString() {
	var chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZ";
	var string_length = 4;
	var randomstring = '';
	for (var i = 0; i < string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum, rnum + 1);
	}
	return randomstring;
}

function randomNumbers() {
	var chars = "0123456789";
	var string_length = 5;
	var randomnumber = '';
	for (var i = 0; i < string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomnumber += chars.substring(rnum, rnum + 1);
	}
	return randomnumber;
}

function pinGeneration(object) {
	var uname, pin, randAlpha, randNum, username = "";
	uname = object;
	randAlpha = randomString();
	randNum = randomNumbers();
	for (var i = 0; i < uname.length; i++) {
		if (!uname.substring(i, i + 1).match(/[^0-9a-zA-Z]/g)) {
			username = username + uname.substring(i, i + 1);
		}
	}
	pin = username.substring(0, 6) + randAlpha + randNum;
	return pin;
}

/** RANDOM PASSWORD GENERATION END * */

/** FOR QUERY PAGE * */

function showParent() {
	$$('mainPage').className = 'show-main-page';
	$$('backdrop').className = 'hide-back-drop';
}

// function hideParent(iframeurl,source,primaryKey,modal){
function hideParent(iframeurl, source, primaryKey, modal, pgmId, authdate,
		tbasl, useraction) {
	$$('mainPage').className = 'hide-main-page';
	$$('backdrop').className = 'show-back-drop';
	$$('paneltwo').className = 'show-panel-two';
	if (!modal) {
		$$('panelone').className = 'hidden';
		$$('panelthree').className = 'hidden';
	} else {
		$$('panelone').className = 'show-panel-one';
		$$('panelthree').className = 'show-panel-three';
	}
	document.all.ifrmgroup.style.visibility = 'visible';
	var serBasePath = document.getElementsByTagName('base')[0].href;
	PK_VALUE = primaryKey;
	PGM_ID = pgmId;
	AUTH_DATE = authdate;
	TBA_SL = tbasl;
	USER_ACTION = useraction;
	// $$('ifrmgroup').src=serBasePath + '/' + iframeurl + '.jsp?' +PK + '=' +
	// primaryKey+'&' +SOURCE+'=' +source+'&callable=Y';
	$$('ifrmgroup').src = serBasePath + '/' + iframeurl + '.jsp?' + PK + '='
			+ primaryKey + '&' + SOURCE + '=' + source + '&callable=Y&pgmId='
			+ pgmId + '&authdate=' + authdate + '&tbasl=' + tbasl
			+ '&useraction=' + useraction;

	if (source == MAIN) {
		$$('queryTitleDiv').innerHTML = SOURCE_MAIN_VIEW;
	} else if (source == TBA) {
		$$('queryTitleDiv').innerHTML = SOURCE_TBA_VIEW;

	}
}

function doview(type) {
	// view(type,PK_VALUE);
	view(type, PK_VALUE, PGM_ID, AUTH_DATE, TBA_SL, USER_ACTION);
}

function loadTBAValues(primaryKey) {
	validator.clearMap();
	validator.setMtm(true);
	validator.setValue(MTM_PROGRAM_ID, CURRENT_PROGRAM_ID);
	validator.setValue(MTM_REQUEST_TYPE, MTM_TBA);
	validator.setValue(MTM_PRIMARY_KEY, primaryKey);
	validator.sendAndReceive();
	filterData();
}

function loadMainValues(primaryKey) {
	validator.clearMap();
	validator.setMtm(true);
	validator.setValue(MTM_PROGRAM_ID, CURRENT_PROGRAM_ID);
	validator.setValue(MTM_REQUEST_TYPE, MTM_MAIN);
	validator.setValue(MTM_PRIMARY_KEY, primaryKey);
	validator.sendAndReceive();
	filterData();
}

function loadWorkFlowValues(wkfwid, wkfwinstancesl, wkfwfootprintsl, wkfwdtlsl) {
	validator.clearMap();
	validator.setMtm(true);
	validator.setValue(MTM_PROGRAM_ID, CURRENT_PROGRAM_ID);
	validator.setValue(MTM_REQUEST_TYPE, MTM_WORKFLOW);
	validator.setValue("wkfwid", wkfwid);
	validator.setValue("wkfwinstancesl", wkfwinstancesl);
	validator.setValue("wkfwfootprintsl", wkfwfootprintsl);
	validator.setValue("wkfwdtlsl", wkfwdtlsl);
	validator.sendAndReceive();
	filterData();
}

function filterData() {
	if (validator.getValue(RESULT) == DATA_NOT_AVAILABLE) {
		jAlert(NO_RECORD, ' For  ' + $$('processId').value);
	} else {
		loadData();
	}
}

/** FOR QUERY PAGE * */

/** SESSION FUNCTIONS BEGIN * */

function getUserID() {
	return $$('_UID').value;
}

function getUserName() {
	return $$('_UN').value;
}

function getBaseCurrency() {
	return $$('_BC').value;
}

function getCBD() {
	return $$('_CBD').value;
}

function getRoleCode() {
	return $$('_UR').value;
}

function getBranchCode() {
	return $$('_BRN').value;
}

function getIpAddress() {
	return $$('_UIP').value;
}

function getUserAgent() {
	return $$('_UA').value;
}

function getDateFormat() {
	return $$('_DF').value;
}

function getLoginDateTime() {
	return $$('_LDT').value;
}

function getLastLoginDateTime() {
	return $$('_LLDT').value;
}

function getBasePath() {
	return document.getElementsByTagName("base")[0].href;
}

/** SESSION FUNCTIONS END * */

/** Cookie Functions BEGIN * */
function getCookie(check_name) {
	var a_all_cookies = document.cookie.split(';');
	var a_temp_cookie = EMPTY_STRING;
	var cookie_name = EMPTY_STRING;
	var cookie_value = EMPTY_STRING;
	var b_cookie_found = false; // set boolean t/f default f
	for (var i = 0; i < a_all_cookies.length; i++) {
		a_temp_cookie = a_all_cookies[i].split('=');
		cookie_name = a_temp_cookie[0].replace(/^\s+|\s+$/g, EMPTY_STRING);
		if (cookie_name == check_name) {
			b_cookie_found = true;
			if (a_temp_cookie.length > 1) {
				cookie_value = unescape(a_temp_cookie[1].replace(/^\s+|\s+$/g,
						EMPTY_STRING));
			}
			return cookie_value;
			break;
		}
		a_temp_cookie = null;
		cookie_name = EMPTY_STRING;
	}
	if (!b_cookie_found) {
		return null;
	}
}

function deleteCookie(name, path, domain) {
	if (getCookie(name)) {
		document.cookie = name + '='
				+ ((path) ? ';path=' + path : EMPTY_STRING)
				+ ((domain) ? ';domain=' + domain : EMPTY_STRING)
				+ ';expires=Thu, 01-Jan-1970 00:00:01 GMT';
	}
}

/** Cookie Functions END * */

function validateAmountOnKeyPress(ev, fldAmt, digitLength, decimalLength,
		negativeAllowed) {
	ev = ev || window.event;
	var keyCode = isPressKeyCode(ev);
	if ((keyCode >= NUMBER_0 && keyCode <= NUMBER_9) || keyCode == DOT
			|| keyCode == MINUS || keyCode == BACKSPACE || keyCode == ESC
			|| ev.altKey) {
		if (keyCode == DOT) {
			if (fldAmt.value.indexOf(".") != -1 || fldAmt.value == ""
					|| decimalLength == null || decimalLength == 0) {
				dostopevent(ev);
				return;
			}
		}
		if (keyCode == MINUS) {
			if (!negativeAllowed) {
				dostopevent(ev);
				return;
			}
			if (fldAmt.value.indexOf("-") != -1) {
				dostopevent(ev);
				return;
			}
		}
		num = fldAmt.value;
		if (num.charAt(0) == "-") {
			digitLength++;
		}
		StringLen = fldAmt.value.length;
		if (num.indexOf(".") == -1) {
			if (keyCode == DOT) {
				digitLength++;
			}
			if (StringLen < digitLength) {
				// return true;
			} else {
				dostopevent(ev);
				return false;
			}
		}

		if (num.indexOf(".") > -1) {
			var decimal = num.split('.');
			if (decimal[1].length < decimalLength) {
				// return true;
			} else {
				dostopevent(ev);
				return false;
			}
		}

	} else {
		if (keyCode == ENTER) {
			return;
		}
		dostopevent(ev);
		return;
	}
}

function validateAmountOnKeyUp(ev, fldAmt, digitLength, decimalLength,
		negativeAllowed) {
	var amtpattrnstatus = false;
	if (fldAmt.value.indexOf(".") != -1) {
		var currentTagTokens = fldAmt.value.split(".");
		var digit = '', decimal = '';
		for (var i = 0; i < currentTagTokens.length; i++) {
			var intlenth = 0, decimallength = 0;
			if (i == 0) {
				if (currentTagTokens[i].indexOf(",") > -1) {
					currentTagTokens[i] = currentTagTokens[i].replace(/,/g,
							EMPTY_STRING);
				}
				intlenth = currentTagTokens[i].length;
				if (intlenth >= digitLength) {
					digit = currentTagTokens[i].substring(0, 15);
					amtpattrnstatus = true;
				} else {
					digit = currentTagTokens[i];
				}
			} else if (i == 1) {
				decimallength = currentTagTokens[i].length;
				if (decimallength > decimalLength) {
					decimal = currentTagTokens[i].substring(0, 2);
					amtpattrnstatus = true;
				} else {
					decimal = currentTagTokens[i];
				}
			}
		}
		if (amtpattrnstatus) {
			fldAmt.value = digit + '.' + decimal;
		}
	}
	if (isValidNegative(fldAmt.value, negativeAllowed)) {
		if (isValidDot(fldAmt.value, decimalLength)) {
			if (isAmtNumeric(ev, fldAmt.value, "Y", digitLength, decimalLength,
					negativeAllowed)) {
				tempAmt = fldAmt.value;
			} else {
				fldAmt.value = tempAmt;
			}
		} else {
			fldAmt.value = tempAmt;
		}
	} else {
		fldAmt.value = tempAmt;
	}
	tempAmt = 0;
}
function isAmtNumeric(ev, num, decFlag, intLen, decLen, negativeAllowed) {
	ev = ev || window.event;
	num = unFormat(num);
	if (num != "-" && num != ".") {
		if (isNaN(num)) {
			return false;
		}
	}
	return true;
}

function isValidDot(textValue, decimalLength) {
	if (decimalLength == 0 && textValue.indexOf(".") >= 0) {
		return false;
	}
	if (textValue.indexOf(".") == textValue.lastIndexOf(".")) {
		return true;
	} else {
		return false;
	}
}

function isValidNegative(textValue, negativeAllowed) {
	var negativeIndex = textValue.lastIndexOf("-");
	if (negativeAllowed) {
		if (negativeIndex <= 0) {
			return true;
		} else {
			return false;
		}
	} else {
		if (negativeIndex == -1) {
			return true;
		} else {
			return false;
		}
	}
}

function unFormatAmount(fldAmt) {
	fldAmt.value = unFormat(fldAmt.value);
}

function getAmountByField(fldAmt) {
	return unFormat(fldAmt.value);
}

function formatAmount(fldAmt, decimalLength) {
	if (parseFloat(unFormat(fldAmt.value)) == parseInt('0')) {
		fldAmt.value = tempAmt;
	}
	if (fldAmt.value != "") {
		fldAmt.value = formatNumbercurr(fldAmt.value, decimalLength);
	}
}

function formatNumbercurr(num1, decLen) {
	var x;
	var k;
	var indexCounter = 0;
	j = 0;
	num1 = unFormat(num1);
	newnumString = "";
	dotPos = num1.indexOf(".");

	if (dotPos >= 0) {
		intPart = num1.substring(0, dotPos);
		decPart = num1.substring(dotPos + 1, num1.length);

		k = eval(decLen - decPart.length);

		if (k < decLen || decPart == "") {
			for (var i = 1; i <= k; i++) {
				decPart = decPart + "0";
			}
			decPart = "." + decPart;
		} else {
			decPart = "." + decPart;
		}
		StringLen = intPart.length;
	} else {
		intPart = num1.substring(0, num1.length);
		decPart = "";
		if (decLen > 0) {
			for (var i = 1; i <= decLen; i++) {
				decPart = decPart + "0";
			}
			decPart = "." + decPart;
		}
		StringLen = intPart.length;
	}

	for (x = StringLen - 1; x >= 0; x--) {
		indexCounter++;
		if (indexCounter == 4) {
			if (num1.charAt(x) != "-") {
				numreplace = num1.charAt(x) + ",";
				newnumString = numreplace + newnumString;
				indexCounter = 1;
			} else {
				newnumString = num1.charAt(x) + newnumString;
			}
		} else {
			newnumString = num1.charAt(x) + newnumString;
		}
	}
	if (dotPos == 0) {
		newnumString = "0" + newnumString;
	}
	if (newnumString.charAt(0) == ","
			|| (newnumString.charAt(0) == "0" && dotPos > 1)) {
		newnumString = newnumString.substring(1, newnumString.length) + decPart;
		num1 = newnumString;
		return trimNumber(newnumString, decLen);
	} else {
		newnumString = newnumString + decPart;
		num1 = newnumString;
		return trimNumber(newnumString, decLen);
	}
}

function unFormat(num) {
	newUnFormatStr = "";
	for (var i = 0; i < num.length; i++) {
		if (num.charAt(i) != ",") {
			newUnFormatStr = newUnFormatStr + num.charAt(i);
		}
	}
	var numLen;
	num = newUnFormatStr;
	numLen = num.length;
	for (var i = 0; i < numLen; i++) {
		if (num.charAt(0) == "0" && num.indexOf(".") > 1) {
			num = num.substring(1, num.length);
		}
	}
	return num;
}

function trimNumber(inputNum, decLen) {
	var totLen;
	decLen = parseInt(decLen);
	dotPos = inputNum.indexOf(".");
	totLen = eval(dotPos + decLen + 1);
	if (inputNum.indexOf(".") >= 0) {
		intPart = inputNum.substring(0, dotPos);
		decPart = inputNum.substring(dotPos + 1, inputNum.length);
		decPart = "." + decPart;
		StringLen = intPart.length;
	} else {
		intPart = inputNum.substring(0, inputNum.length);
		decPart = "";
		StringLen = intPart.length;
	}
	if (decPart.length > decLen) {
		decPart = inputNum.substring(dotPos + 1, totLen);
		decPart = "." + decPart;
	}
	inputNum = intPart + decPart;
	return inputNum;
}

/** FOR AMOUNT FIELD VALIDATIONS END * */

/** FOR TEXTAREA VALIDATION BEGIN * */
/** FOR CANCEL AND EXIT PAGE * */

function cancelPage() {

	jConfirm(CANCEL_CONFIRM, 'Confirm', function(r) {
		if (r == true) {
			clearFields();
			$$(FIRSTFIELD).focus();
		} else {
			jAlert('You are not going to Cancel this Page', 'Alert For  '
					+ getUserID());
		}
	});
}

function exitPage() {

	jConfirm(EXIT_CONFIRM, 'Confirm', function(r) {
		if (r == true) {
			window.close();
		} else {
			jAlert('You are not going to Exit from Page', 'Alert For  '
					+ getUserID());
		}
	});
}

/** FOR CANCEL AND EXIT PAGE * */
function focusTextArea(fldName) {
	document.getElementById(fldName).focus();
	var range = document.getElementById(fldName).createTextRange();
	range.move("textedit");
	range.select();
}

function validateTextArea(fldName, rows, cols, functionpointer) {
	var textarray = document.getElementById(fldName).value.split("\n");
	if (window.event.keyCode == 9 || window.event.keyCode == 13) {
		if (textarray[textarray.length - 1] != "" && textarray.length < rows) {
			return;
		} else {
			window.event.returnValue = false;
			window.event.keyCode = 0;
			eval(functionpointer);
			return;
		}
	}

	// currrow = getCursorPos(fldName) - 1;
	currpos = getCaretInfo(document.getElementById(fldName)).caret;
	currrow = getRowOfTextArea(document.getElementById(fldName), currpos);

	if (textarray[currrow].length >= cols && window.event.keyCode != 13) {
		try {
			alert("only "
					+ cols
					+ " characters allowed in a line, use return key to go to next line");
		} catch (e) {
		}
		;
		window.event.returnValue = false;
		window.event.keyCode = 0;
		return;
	}

}

function getCursorPos(textElement) {

	// save off the current value to restore it later,
	var sOldText = document.getElementById(textElement).value;
	var sOldArr = document.getElementById(textElement).value.split("\n");

	var linepos = 0;
	// create a range object and save off it's text
	var objRange = document.selection.createRange();
	var sOldRange = objRange.text;

	// set this string to a small string that will not normally be encountered
	var sWeirdString = '#%~';

	// insert the weirdstring where the cursor is at
	objRange.text = sOldRange + sWeirdString;
	objRange.moveStart('character',
			(0 - sOldRange.length - sWeirdString.length));

	// save off the new string with the weirdstring in it
	var sNewText = document.getElementById(textElement).value;

	// set the actual text value back to how it was
	objRange.text = sOldRange;

	// look through the new string we saved off and find the location of
	// the weirdstring that was inserted and return that value
	for (i = 0; i <= sNewText.length; i++) {
		var sTemp = sNewText.substring(i, i + sWeirdString.length);
		if (sTemp == sWeirdString) {
			var cursorPos = (i - sOldRange.length);
			for (j = 0; j <= (sOldArr.length) - 1; j++) {
				linepos = linepos + sOldArr[j].length;
				if (cursorPos <= linepos) {
					return j + 1;
				}
			}
			return j;
		}
	}

}

function getRowOfTextArea(ele, position) {
	var textarray = ele.value.split("\n");
	var start = 0;
	var row = 0;
	if (document.all) {
		for (var i = 0; i < textarray.length; ++i) {
			start += textarray[i].length + 1;
			if (start >= position) {
				row = (i);
				break;
			}
		}
	} else {
		for (var i = 0; i < textarray.length; ++i) {
			start += textarray[i].length;
			if (start >= position) {
				row = (i);
				break;
			}
			start++;
		}
	}
	return row;
}

var getCaretInfo = function(oTextarea) {
	var docObj = oTextarea.ownerDocument;
	var result = {
		start : 0,
		end : 0,
		caret : 0
	};
	if (navigator.appVersion.indexOf("MSIE") != -1) {
		if (oTextarea.tagName.toLowerCase() == "textarea") {
			if (oTextarea.value.charCodeAt(oTextarea.value.length - 1) < 14) {
				oTextarea.value = oTextarea.value.replace(/34/g, '')
						+ String.fromCharCode(28);
			}
			var oRng = docObj.selection.createRange();
			var oRng2 = oRng.duplicate();
			oRng2.moveToElementText(oTextarea);
			oRng2.setEndPoint('StartToEnd', oRng);
			result.end = oTextarea.value.length - oRng2.text.length;
			oRng2.setEndPoint('StartToStart', oRng);
			result.start = oTextarea.value.length - oRng2.text.length;
			result.caret = result.end;
			if (oTextarea.value.substr(oTextarea.value.length - 1) == String
					.fromCharCode(28)) {
				oTextarea.value = oTextarea.value.substr(0,
						oTextarea.value.length - 1);
			}
		} else {
			var range = docObj.selection.createRange();
			var r2 = range.duplicate();
			result.start = 0 - r2.moveStart('character', -100000);
			result.end = result.start + range.text.length;
			result.caret = result.end;
		}
	} else {
		result.start = oTextarea.selectionStart;
		result.end = oTextarea.selectionEnd;
		result.caret = result.end;
	}
	if (result.start < 0) {
		result = {
			start : 0,
			end : 0,
			caret : 0
		};
	}
	return result;
};

function setSelectionRange(input, selectionStart, selectionEnd) {
	if (input.setSelectionRange) {
		input.focus();
		input.setSelectionRange(selectionStart, selectionEnd);
	} else if (input.createTextRange) {
		var range = input.createTextRange();
		range.collapse(true);
		range.moveEnd('character', selectionEnd);
		range.moveStart('character', selectionStart);
		range.select();
	}
}
function setCaretToEnd(input) {
	setSelectionRange(input, input.value.length, input.value.length);
}
function setCaretToBegin(input) {
	setSelectionRange(input, 0, 0);
}
function setCaretToPos(input, pos) {
	setSelectionRange(input, pos, pos);
}
function selectString(input, string) {
	var match = new RegExp(string, "i").exec(input.value);
	if (match) {
		setSelectionRange(input, match.index, match.index + match[0].length);
	}
}
function replaceSelection(input, replaceString) {
	if (input.setSelectionRange) {
		var selectionStart = input.selectionStart;
		var selectionEnd = input.selectionEnd;
		input.value = input.value.substring(0, selectionStart) + replaceString
				+ input.value.substring(selectionEnd);
		if (selectionStart != selectionEnd)
			setSelectionRange(input, selectionStart, selectionStart
					+ replaceString.length);
		else
			setCaretToPos(input, selectionStart + replaceString.length);
	} else if (document.selection) {
		var range = document.selection.createRange();
		if (range.parentElement() == input) {
			var isCollapsed = range.text == '';
			range.text = replaceString;
			if (!isCollapsed) {
				range.moveStart('character', -replaceString.length);
				range.select();
			}
		}
	}
}

/** FOR TEXTAREA VALIDATION END * */

/** FOR CANCEL AND EXIT PAGE * */
/*
 * 
 * 
 *//** FOR CANCEL AND EXIT PAGE * */

/** OPERATION LOG ENTRY EXIT BEGIN * */

function oprLogEntry() {
	var validator = new xmlHTTPValidator();
	validator.clearMap();
	validator.setClass("com.corenett.validators.GeneralValidator");
	validator.setMethod("oprLogEntry");
	validator.sendAndReceive();
	if (validator.getValue("result") == DATA_AVAILABLE) {
		setOprLogSl(validator.getValue("result_xml"));
	}
}

function oprLogExit() {
	var validator = new xmlHTTPValidator();
	validator.clearMap();
	validator.setClass("com.corenett.validators.GeneralValidator");
	validator.setMethod("oprLogExit");
	validator.setValue("OPRLOGSL", getOprLogSl());
	validator.sendAndReceive();
}

/** OPERATION LOG ENTRY EXIT END * */

/** EDITING IS STRICTLY PROHIBITED * */

/** SHA-256 IMPLEMNETATION BEGIN * */

/*
 * A JavaScript implementation of the SHA256 hash function.
 * 
 * FILE: sha256.js VERSION: 0.8 AUTHOR: Christoph Bichlmeier
 * <informatik@zombiearena.de>
 * 
 * NOTE: This version is not tested thoroughly!
 * 
 * Copyright (c) 2003, Christoph Bichlmeier All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 * 1. Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer. 2. Redistributions in
 * binary form must reproduce the above copyright notice, this list of
 * conditions and the following disclaimer in the documentation and/or other
 * materials provided with the distribution. 3. Neither the name of the
 * copyright holder nor the names of contributors may be used to endorse or
 * promote products derived from this software without specific prior written
 * permission.
 * 
 * ======================================================================
 * 
 * THIS SOFTWARE IS PROVIDED BY THE AUTHORS ''AS IS'' AND ANY EXPRESS OR IMPLIED
 * WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO
 * EVENT SHALL THE AUTHORS OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
 * INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA,
 * OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
 * LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 * NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
 * EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

/* SHA256 logical functions */
function rotateRight(n, x) {
	return ((x >>> n) | (x << (32 - n)));
}
function choice(x, y, z) {
	return ((x & y) ^ (~x & z));
}
function majority(x, y, z) {
	return ((x & y) ^ (x & z) ^ (y & z));
}
function sha256_Sigma0(x) {
	return (rotateRight(2, x) ^ rotateRight(13, x) ^ rotateRight(22, x));
}
function sha256_Sigma1(x) {
	return (rotateRight(6, x) ^ rotateRight(11, x) ^ rotateRight(25, x));
}
function sha256_sigma0(x) {
	return (rotateRight(7, x) ^ rotateRight(18, x) ^ (x >>> 3));
}
function sha256_sigma1(x) {
	return (rotateRight(17, x) ^ rotateRight(19, x) ^ (x >>> 10));
}
function sha256_expand(W, j) {
	return (W[j & 0x0f] += sha256_sigma1(W[(j + 14) & 0x0f])
			+ W[(j + 9) & 0x0f] + sha256_sigma0(W[(j + 1) & 0x0f]));
}

/* Hash constant words K: */
var K256 = new Array(0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5,
		0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01,
		0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
		0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa,
		0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7,
		0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967, 0x27b70a85, 0x2e1b2138,
		0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85,
		0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624,
		0xf40e3585, 0x106aa070, 0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5,
		0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f,
		0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2);

/* global arrays */
var ihash, count, buffer;
var sha256_hex_digits = "0123456789abcdef";

/*
 * Add 32-bit integers with 16-bit operations (bug in some JS-interpreters:
 * overflow)
 */
function safe_add(x, y) {
	var lsw = (x & 0xffff) + (y & 0xffff);
	var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
	return (msw << 16) | (lsw & 0xffff);
}

/* Initialise the SHA256 computation */
function sha256_init() {
	ihash = new Array(8);
	count = new Array(2);
	buffer = new Array(64);
	count[0] = count[1] = 0;
	ihash[0] = 0x6a09e667;
	ihash[1] = 0xbb67ae85;
	ihash[2] = 0x3c6ef372;
	ihash[3] = 0xa54ff53a;
	ihash[4] = 0x510e527f;
	ihash[5] = 0x9b05688c;
	ihash[6] = 0x1f83d9ab;
	ihash[7] = 0x5be0cd19;
}

/* Transform a 512-bit message block */
function sha256_transform() {
	var a, b, c, d, e, f, g, h, T1, T2;
	var W = new Array(16);

	/* Initialize registers with the previous intermediate value */
	a = ihash[0];
	b = ihash[1];
	c = ihash[2];
	d = ihash[3];
	e = ihash[4];
	f = ihash[5];
	g = ihash[6];
	h = ihash[7];

	/* make 32-bit words */
	for (var i = 0; i < 16; i++)
		W[i] = ((buffer[(i << 2) + 3]) | (buffer[(i << 2) + 2] << 8)
				| (buffer[(i << 2) + 1] << 16) | (buffer[i << 2] << 24));

	for (var j = 0; j < 64; j++) {
		T1 = h + sha256_Sigma1(e) + choice(e, f, g) + K256[j];
		if (j < 16)
			T1 += W[j];
		else
			T1 += sha256_expand(W, j);
		T2 = sha256_Sigma0(a) + majority(a, b, c);
		h = g;
		g = f;
		f = e;
		e = safe_add(d, T1);
		d = c;
		c = b;
		b = a;
		a = safe_add(T1, T2);
	}

	/* Compute the current intermediate hash value */
	ihash[0] += a;
	ihash[1] += b;
	ihash[2] += c;
	ihash[3] += d;
	ihash[4] += e;
	ihash[5] += f;
	ihash[6] += g;
	ihash[7] += h;
}

/* Read the next chunk of data and update the SHA256 computation */
function sha256_update(data, inputLen) {
	var i, index, curpos = 0;
	/* Compute number of bytes mod 64 */
	index = ((count[0] >> 3) & 0x3f);
	var remainder = (inputLen & 0x3f);

	/* Update number of bits */
	if ((count[0] += (inputLen << 3)) < (inputLen << 3))
		count[1]++;
	count[1] += (inputLen >> 29);

	/* Transform as many times as possible */
	for (i = 0; i + 63 < inputLen; i += 64) {
		for (var j = index; j < 64; j++)
			buffer[j] = data.charCodeAt(curpos++);
		sha256_transform();
		index = 0;
	}

	/* Buffer remaining input */
	for (var j = 0; j < remainder; j++)
		buffer[j] = data.charCodeAt(curpos++);
}

/* Finish the computation by operations such as padding */
function sha256_final() {
	var index = ((count[0] >> 3) & 0x3f);
	buffer[index++] = 0x80;
	if (index <= 56) {
		for (var i = index; i < 56; i++)
			buffer[i] = 0;
	} else {
		for (var i = index; i < 64; i++)
			buffer[i] = 0;
		sha256_transform();
		for (var i = 0; i < 56; i++)
			buffer[i] = 0;
	}
	buffer[56] = (count[1] >>> 24) & 0xff;
	buffer[57] = (count[1] >>> 16) & 0xff;
	buffer[58] = (count[1] >>> 8) & 0xff;
	buffer[59] = count[1] & 0xff;
	buffer[60] = (count[0] >>> 24) & 0xff;
	buffer[61] = (count[0] >>> 16) & 0xff;
	buffer[62] = (count[0] >>> 8) & 0xff;
	buffer[63] = count[0] & 0xff;
	sha256_transform();
}

/* Split the internal hash values into an array of bytes */
function sha256_encode_bytes() {
	var j = 0;
	var output = new Array(32);
	for (var i = 0; i < 8; i++) {
		output[j++] = ((ihash[i] >>> 24) & 0xff);
		output[j++] = ((ihash[i] >>> 16) & 0xff);
		output[j++] = ((ihash[i] >>> 8) & 0xff);
		output[j++] = (ihash[i] & 0xff);
	}
	return output;
}

/* Get the internal hash as a hex string */
function sha256_encode_hex() {
	var output = new String();
	for (var i = 0; i < 8; i++) {
		for (var j = 28; j >= 0; j -= 4)
			output += sha256_hex_digits.charAt((ihash[i] >>> j) & 0x0f);
	}
	return output;
}

/*
 * Main function: returns a hex string representing the SHA256 value of the
 * given data
 */
function sha256_digest(data) {
	sha256_init();
	sha256_update(data, data.length);
	sha256_final();
	return sha256_encode_hex();
}

/** SHA-256 IMPLEMNETATION END * */

/** AES IMPLEMNETATION BEGIN * */

/*
 * rijndael.js Rijndael Reference Implementation
 * 
 * This is a modified version of the software described below, produced in
 * September 2003 by John Walker for use in the JavsScrypt browser-based
 * encryption package. The principal changes are replacing the original
 * getRandomBytes function with one which calls our pseudorandom generator
 * (which must be instantiated and seeded before the first call on
 * getRandomBytes), and changing keySizeInBits to 256. Some code not required by
 * the JavsScrypt application has been commented out. Please see
 * http://www.fourmilab.ch/javascrypt/ for further information on JavaScrypt.
 * 
 * The following is the original copyright and application information.
 * 
 * Copyright (c) 2001 Fritz Schneider
 * 
 * This software is provided as-is, without express or implied warranty.
 * Permission to use, copy, modify, distribute or sell this software, with or
 * without fee, for any purpose and by any individual or organization, is hereby
 * granted, provided that the above copyright notice and this paragraph appear
 * in all copies. Distribution as a part of an application or binary must
 * include the above copyright notice in the documentation and/or other
 * materials provided with the application or distribution.
 * 
 * As the above disclaimer notes, you are free to use this code however you
 * want. However, I would request that you send me an email (fritz /at/ cs /dot/
 * ucsd /dot/ edu) to say hi if you find this code useful or instructional.
 * Seeing that people are using the code acts as encouragement for me to
 * continue development. If you *really* want to thank me you can buy the book I
 * wrote with Thomas Powell, _JavaScript: _The_Complete_Reference_ :)
 * 
 * This code is an UNOPTIMIZED REFERENCE implementation of Rijndael. If there is
 * sufficient interest I can write an optimized (word-based, table-driven)
 * version, although you might want to consider using a compiled language if
 * speed is critical to your application. As it stands, one run of the monte
 * carlo test (10,000 encryptions) can take up to several minutes, depending
 * upon your processor. You shouldn't expect more than a few kilobytes per
 * second in throughput.
 * 
 * Also note that there is very little error checking in these functions. Doing
 * proper error checking is always a good idea, but the ideal implementation
 * (using the instanceof operator and exceptions) requires IE5+/NS6+, and I've
 * chosen to implement this code so that it is compatible with IE4/NS4.
 * 
 * And finally, because JavaScript doesn't have an explicit byte/char data type
 * (although JavaScript 2.0 most likely will), when I refer to "byte" in this
 * code I generally mean "32 bit integer with value in the interval [0,255]"
 * which I treat as a byte.
 * 
 * See http://www-cse.ucsd.edu/~fritz/rijndael.html for more documentation of
 * the (very simple) API provided by this code.
 * 
 * Fritz Schneider fritz at cs.ucsd.edu
 * 
 */

// Rijndael parameters -- Valid values are 128, 192, or 256
var keySizeInBits = 256;
var blockSizeInBits = 128;

//
// Note: in the following code the two dimensional arrays are indexed as
// you would probably expect, as array[row][column]. The state arrays
// are 2d arrays of the form state[4][Nb].

// The number of rounds for the cipher, indexed by [Nk][Nb]
var roundsArray = [ , , , , [ , , , , 10, , 12, , 14 ], ,
		[ , , , , 12, , 12, , 14 ], , [ , , , , 14, , 14, , 14 ] ];

// The number of bytes to shift by in shiftRow, indexed by [Nb][row]
var shiftOffsets = [ , , , , [ , 1, 2, 3 ], , [ , 1, 2, 3 ], , [ , 1, 3, 4 ] ];

// The round constants used in subkey expansion
var Rcon = [ 0x01, 0x02, 0x04, 0x08, 0x10, 0x20, 0x40, 0x80, 0x1b, 0x36, 0x6c,
		0xd8, 0xab, 0x4d, 0x9a, 0x2f, 0x5e, 0xbc, 0x63, 0xc6, 0x97, 0x35, 0x6a,
		0xd4, 0xb3, 0x7d, 0xfa, 0xef, 0xc5, 0x91 ];

// Precomputed lookup table for the SBox
var SBox = [ 99, 124, 119, 123, 242, 107, 111, 197, 48, 1, 103, 43, 254, 215,
		171, 118, 202, 130, 201, 125, 250, 89, 71, 240, 173, 212, 162, 175,
		156, 164, 114, 192, 183, 253, 147, 38, 54, 63, 247, 204, 52, 165, 229,
		241, 113, 216, 49, 21, 4, 199, 35, 195, 24, 150, 5, 154, 7, 18, 128,
		226, 235, 39, 178, 117, 9, 131, 44, 26, 27, 110, 90, 160, 82, 59, 214,
		179, 41, 227, 47, 132, 83, 209, 0, 237, 32, 252, 177, 91, 106, 203,
		190, 57, 74, 76, 88, 207, 208, 239, 170, 251, 67, 77, 51, 133, 69, 249,
		2, 127, 80, 60, 159, 168, 81, 163, 64, 143, 146, 157, 56, 245, 188,
		182, 218, 33, 16, 255, 243, 210, 205, 12, 19, 236, 95, 151, 68, 23,
		196, 167, 126, 61, 100, 93, 25, 115, 96, 129, 79, 220, 34, 42, 144,
		136, 70, 238, 184, 20, 222, 94, 11, 219, 224, 50, 58, 10, 73, 6, 36,
		92, 194, 211, 172, 98, 145, 149, 228, 121, 231, 200, 55, 109, 141, 213,
		78, 169, 108, 86, 244, 234, 101, 122, 174, 8, 186, 120, 37, 46, 28,
		166, 180, 198, 232, 221, 116, 31, 75, 189, 139, 138, 112, 62, 181, 102,
		72, 3, 246, 14, 97, 53, 87, 185, 134, 193, 29, 158, 225, 248, 152, 17,
		105, 217, 142, 148, 155, 30, 135, 233, 206, 85, 40, 223, 140, 161, 137,
		13, 191, 230, 66, 104, 65, 153, 45, 15, 176, 84, 187, 22 ];

// Precomputed lookup table for the inverse SBox
var SBoxInverse = [ 82, 9, 106, 213, 48, 54, 165, 56, 191, 64, 163, 158, 129,
		243, 215, 251, 124, 227, 57, 130, 155, 47, 255, 135, 52, 142, 67, 68,
		196, 222, 233, 203, 84, 123, 148, 50, 166, 194, 35, 61, 238, 76, 149,
		11, 66, 250, 195, 78, 8, 46, 161, 102, 40, 217, 36, 178, 118, 91, 162,
		73, 109, 139, 209, 37, 114, 248, 246, 100, 134, 104, 152, 22, 212, 164,
		92, 204, 93, 101, 182, 146, 108, 112, 72, 80, 253, 237, 185, 218, 94,
		21, 70, 87, 167, 141, 157, 132, 144, 216, 171, 0, 140, 188, 211, 10,
		247, 228, 88, 5, 184, 179, 69, 6, 208, 44, 30, 143, 202, 63, 15, 2,
		193, 175, 189, 3, 1, 19, 138, 107, 58, 145, 17, 65, 79, 103, 220, 234,
		151, 242, 207, 206, 240, 180, 230, 115, 150, 172, 116, 34, 231, 173,
		53, 133, 226, 249, 55, 232, 28, 117, 223, 110, 71, 241, 26, 113, 29,
		41, 197, 137, 111, 183, 98, 14, 170, 24, 190, 27, 252, 86, 62, 75, 198,
		210, 121, 32, 154, 219, 192, 254, 120, 205, 90, 244, 31, 221, 168, 51,
		136, 7, 199, 49, 177, 18, 16, 89, 39, 128, 236, 95, 96, 81, 127, 169,
		25, 181, 74, 13, 45, 229, 122, 159, 147, 201, 156, 239, 160, 224, 59,
		77, 174, 42, 245, 176, 200, 235, 187, 60, 131, 83, 153, 97, 23, 43, 4,
		126, 186, 119, 214, 38, 225, 105, 20, 99, 85, 33, 12, 125 ];

// This method circularly shifts the array left by the number of elements
// given in its parameter. It returns the resulting array and is used for
// the ShiftRow step. Note that shift() and push() could be used for a more
// elegant solution, but they require IE5.5+, so I chose to do it manually.

function cyclicShiftLeft(theArray, positions) {
	var temp = theArray.slice(0, positions);
	theArray = theArray.slice(positions).concat(temp);
	return theArray;
}

// Cipher parameters ... do not change these
var Nk = keySizeInBits / 32;
var Nb = blockSizeInBits / 32;
var Nr = roundsArray[Nk][Nb];

// Multiplies the element "poly" of GF(2^8) by x. See the Rijndael spec.

function xtime(poly) {
	poly <<= 1;
	return ((poly & 0x100) ? (poly ^ 0x11B) : (poly));
}

// Multiplies the two elements of GF(2^8) together and returns the result.
// See the Rijndael spec, but should be straightforward: for each power of
// the indeterminant that has a 1 coefficient in x, add y times that power
// to the result. x and y should be bytes representing elements of GF(2^8)

function mult_GF256(x, y) {
	var bit, result = 0;

	for (bit = 1; bit < 256; bit *= 2, y = xtime(y)) {
		if (x & bit)
			result ^= y;
	}
	return result;
}

// Performs the substitution step of the cipher. State is the 2d array of
// state information (see spec) and direction is string indicating whether
// we are performing the forward substitution ("encrypt") or inverse
// substitution (anything else)

function byteSub(state, direction) {
	var S;
	if (direction == "encrypt") // Point S to the SBox we're using
		S = SBox;
	else
		S = SBoxInverse;
	for (var i = 0; i < 4; i++)
		// Substitute for every byte in state
		for (var j = 0; j < Nb; j++)
			state[i][j] = S[state[i][j]];
}

// Performs the row shifting step of the cipher.

function shiftRow(state, direction) {
	for (var i = 1; i < 4; i++)
		// Row 0 never shifts
		if (direction == "encrypt")
			state[i] = cyclicShiftLeft(state[i], shiftOffsets[Nb][i]);
		else
			state[i] = cyclicShiftLeft(state[i], Nb - shiftOffsets[Nb][i]);

}

// Performs the column mixing step of the cipher. Most of these steps can
// be combined into table lookups on 32bit values (at least for encryption)
// to greatly increase the speed.

function mixColumn(state, direction) {
	var b = []; // Result of matrix multiplications
	for (var j = 0; j < Nb; j++) { // Go through each column...
		for (var i = 0; i < 4; i++) { // and for each row in the column...
			if (direction == "encrypt")
				b[i] = mult_GF256(state[i][j], 2) ^ // perform mixing
				mult_GF256(state[(i + 1) % 4][j], 3) ^ state[(i + 2) % 4][j]
						^ state[(i + 3) % 4][j];
			else
				b[i] = mult_GF256(state[i][j], 0xE)
						^ mult_GF256(state[(i + 1) % 4][j], 0xB)
						^ mult_GF256(state[(i + 2) % 4][j], 0xD)
						^ mult_GF256(state[(i + 3) % 4][j], 9);
		}
		for (var i = 0; i < 4; i++)
			// Place result back into column
			state[i][j] = b[i];
	}
}

// Adds the current round key to the state information. Straightforward.

function addRoundKey(state, roundKey) {
	for (var j = 0; j < Nb; j++) { // Step through columns...
		state[0][j] ^= (roundKey[j] & 0xFF); // and XOR
		state[1][j] ^= ((roundKey[j] >> 8) & 0xFF);
		state[2][j] ^= ((roundKey[j] >> 16) & 0xFF);
		state[3][j] ^= ((roundKey[j] >> 24) & 0xFF);
	}
}

// This function creates the expanded key from the input (128/192/256-bit)
// key. The parameter key is an array of bytes holding the value of the key.
// The returned value is an array whose elements are the 32-bit words that
// make up the expanded key.

function keyExpansion(key) {
	var expandedKey = new Array();
	var temp;

	// in case the key size or parameters were changed...
	Nk = keySizeInBits / 32;
	Nb = blockSizeInBits / 32;
	Nr = roundsArray[Nk][Nb];

	for (var j = 0; j < Nk; j++)
		// Fill in input key first
		expandedKey[j] = (key[4 * j]) | (key[4 * j + 1] << 8)
				| (key[4 * j + 2] << 16) | (key[4 * j + 3] << 24);

	// Now walk down the rest of the array filling in expanded key bytes as
	// per Rijndael's spec
	for (j = Nk; j < Nb * (Nr + 1); j++) { // For each word of expanded key
		temp = expandedKey[j - 1];
		if (j % Nk == 0)
			temp = ((SBox[(temp >> 8) & 0xFF])
					| (SBox[(temp >> 16) & 0xFF] << 8)
					| (SBox[(temp >> 24) & 0xFF] << 16) | (SBox[temp & 0xFF] << 24))
					^ Rcon[Math.floor(j / Nk) - 1];
		else if (Nk > 6 && j % Nk == 4)
			temp = (SBox[(temp >> 24) & 0xFF] << 24)
					| (SBox[(temp >> 16) & 0xFF] << 16)
					| (SBox[(temp >> 8) & 0xFF] << 8) | (SBox[temp & 0xFF]);
		expandedKey[j] = expandedKey[j - Nk] ^ temp;
	}
	return expandedKey;
}

// Rijndael's round functions...

function Round(state, roundKey) {
	byteSub(state, "encrypt");
	shiftRow(state, "encrypt");
	mixColumn(state, "encrypt");
	addRoundKey(state, roundKey);
}

function InverseRound(state, roundKey) {
	addRoundKey(state, roundKey);
	mixColumn(state, "decrypt");
	shiftRow(state, "decrypt");
	byteSub(state, "decrypt");
}

function FinalRound(state, roundKey) {
	byteSub(state, "encrypt");
	shiftRow(state, "encrypt");
	addRoundKey(state, roundKey);
}

function InverseFinalRound(state, roundKey) {
	addRoundKey(state, roundKey);
	shiftRow(state, "decrypt");
	byteSub(state, "decrypt");
}

// encrypt is the basic encryption function. It takes parameters
// block, an array of bytes representing a plaintext block, and expandedKey,
// an array of words representing the expanded key previously returned by
// keyExpansion(). The ciphertext block is returned as an array of bytes.

function encrypt(block, expandedKey) {
	var i;
	if (!block || block.length * 8 != blockSizeInBits)
		return;
	if (!expandedKey)
		return;

	block = packBytes(block);
	addRoundKey(block, expandedKey);
	for (i = 1; i < Nr; i++)
		Round(block, expandedKey.slice(Nb * i, Nb * (i + 1)));
	FinalRound(block, expandedKey.slice(Nb * Nr));
	return unpackBytes(block);
}

// decrypt is the basic decryption function. It takes parameters
// block, an array of bytes representing a ciphertext block, and expandedKey,
// an array of words representing the expanded key previously returned by
// keyExpansion(). The decrypted block is returned as an array of bytes.

function decrypt(block, expandedKey) {
	var i;
	if (!block || block.length * 8 != blockSizeInBits)
		return;
	if (!expandedKey)
		return;

	block = packBytes(block);
	InverseFinalRound(block, expandedKey.slice(Nb * Nr));
	for (i = Nr - 1; i > 0; i--)
		InverseRound(block, expandedKey.slice(Nb * i, Nb * (i + 1)));
	addRoundKey(block, expandedKey);
	return unpackBytes(block);
}

/*
 * !NEEDED //This method takes a byte array (byteArray) and converts it to a
 * string by //applying String.fromCharCode() to each value and concatenating
 * the result. //The resulting string is returned. Note that this function SKIPS
 * zero bytes //under the assumption that they are padding added in
 * formatPlaintext(). //Obviously, do not invoke this method on raw data that
 * can contain zero //bytes. It is really only appropriate for printable
 * ASCII/Latin-1 //values. Roll your own function for more robust functionality :)
 * 
 * function byteArrayToString(byteArray) { var result = ""; for(var i=0; i<byteArray.length;
 * i++) if (byteArray[i] != 0) result += String.fromCharCode(byteArray[i]);
 * return result; }
 */

// This function takes an array of bytes (byteArray) and converts them
// to a hexadecimal string. Array element 0 is found at the beginning of
// the resulting string, high nibble first. Consecutive elements follow
// similarly, for example [16, 255] --> "10ff". The function returns a
// string.
function byteArrayToHex(byteArray) {
	var result = "";
	if (!byteArray)
		return;
	for (var i = 0; i < byteArray.length; i++)
		result += ((byteArray[i] < 16) ? "0" : "") + byteArray[i].toString(16);

	return result;
}

// This function converts a string containing hexadecimal digits to an
// array of bytes. The resulting byte array is filled in the order the
// values occur in the string, for example "10FF" --> [16, 255]. This
// function returns an array.

function hexToByteArray(hexString) {
	var byteArray = [];
	if (hexString.length % 2) // must have even length
		return;
	if (hexString.indexOf("0x") == 0 || hexString.indexOf("0X") == 0)
		hexString = hexString.substring(2);
	for (var i = 0; i < hexString.length; i += 2)
		byteArray[Math.floor(i / 2)] = parseInt(hexString.slice(i, i + 2), 16);
	return byteArray;
}

// This function packs an array of bytes into the four row form defined by
// Rijndael. It assumes the length of the array of bytes is divisible by
// four. Bytes are filled in according to the Rijndael spec (starting with
// column 0, row 0 to 3). This function returns a 2d array.

function packBytes(octets) {
	var state = new Array();
	if (!octets || octets.length % 4)
		return;

	state[0] = new Array();
	state[1] = new Array();
	state[2] = new Array();
	state[3] = new Array();
	for (var j = 0; j < octets.length; j += 4) {
		state[0][j / 4] = octets[j];
		state[1][j / 4] = octets[j + 1];
		state[2][j / 4] = octets[j + 2];
		state[3][j / 4] = octets[j + 3];
	}
	return state;
}

// This function unpacks an array of bytes from the four row format preferred
// by Rijndael into a single 1d array of bytes. It assumes the input "packed"
// is a packed array. Bytes are filled in according to the Rijndael spec.
// This function returns a 1d array of bytes.

function unpackBytes(packed) {
	var result = new Array();
	for (var j = 0; j < packed[0].length; j++) {
		result[result.length] = packed[0][j];
		result[result.length] = packed[1][j];
		result[result.length] = packed[2][j];
		result[result.length] = packed[3][j];
	}
	return result;
}

// This function takes a prospective plaintext (string or array of bytes)
// and pads it with pseudorandom bytes if its length is not a multiple of the
// block
// size. If plaintext is a string, it is converted to an array of bytes
// in the process. The type checking can be made much nicer using the
// instanceof operator, but this operator is not available until IE5.0 so I
// chose to use the heuristic below.

function formatPlaintext(plaintext) {
	var bpb = blockSizeInBits / 8; // bytes per block
	var i;

	// if primitive string or String instance
	if ((!((typeof plaintext == "object") && ((typeof (plaintext[0])) == "number")))
			&& ((typeof plaintext == "string") || plaintext.indexOf)) {
		plaintext = plaintext.split("");
		// Unicode issues here (ignoring high byte)
		for (i = 0; i < plaintext.length; i++)
			plaintext[i] = plaintext[i].charCodeAt(0) & 0xFF;
	}

	i = plaintext.length % bpb;
	if (i > 0) {
		plaintext = plaintext.concat(getRandomBytes(bpb - i));
	}

	return plaintext;
}

// Returns an array containing "howMany" random bytes.

function getRandomBytes(howMany) {
	var i, bytes = new Array();

	for (i = 0; i < howMany; i++) {
		bytes[i] = prng.nextInt(255);
	}
	return bytes;
}

// rijndaelEncrypt(plaintext, key, mode)
// Encrypts the plaintext using the given key and in the given mode.
// The parameter "plaintext" can either be a string or an array of bytes.
// The parameter "key" must be an array of key bytes. If you have a hex
// string representing the key, invoke hexToByteArray() on it to convert it
// to an array of bytes. The third parameter "mode" is a string indicating
// the encryption mode to use, either "ECB" or "CBC". If the parameter is
// omitted, ECB is assumed.
//
// An array of bytes representing the cihpertext is returned. To convert
// this array to hex, invoke byteArrayToHex() on it.

function rijndaelEncrypt(plaintext, key, mode) {
	var expandedKey, i, aBlock;
	var bpb = blockSizeInBits / 8; // bytes per block
	var ct; // ciphertext

	if (!plaintext || !key)
		return;
	if (key.length * 8 != keySizeInBits)
		return;
	if (mode == "CBC") {
		ct = getRandomBytes(bpb); // get IV
		// dump("IV", byteArrayToHex(ct));
	} else {
		mode = "ECB";
		ct = new Array();
	}

	// convert plaintext to byte array and pad with zeros if necessary.
	plaintext = formatPlaintext(plaintext);

	expandedKey = keyExpansion(key);

	for (var block = 0; block < plaintext.length / bpb; block++) {
		aBlock = plaintext.slice(block * bpb, (block + 1) * bpb);
		if (mode == "CBC") {
			for (var i = 0; i < bpb; i++) {
				aBlock[i] ^= ct[(block * bpb) + i];
			}
		}
		ct = ct.concat(encrypt(aBlock, expandedKey));
	}

	return ct;
}

// rijndaelDecrypt(ciphertext, key, mode)
// Decrypts the using the given key and mode. The parameter "ciphertext"
// must be an array of bytes. The parameter "key" must be an array of key
// bytes. If you have a hex string representing the ciphertext or key,
// invoke hexToByteArray() on it to convert it to an array of bytes. The
// parameter "mode" is a string, either "CBC" or "ECB".
//
// An array of bytes representing the plaintext is returned. To convert
// this array to a hex string, invoke byteArrayToHex() on it. To convert it
// to a string of characters, you can use byteArrayToString().

function rijndaelDecrypt(ciphertext, key, mode) {
	var expandedKey;
	var bpb = blockSizeInBits / 8; // bytes per block
	var pt = new Array(); // plaintext array
	var aBlock; // a decrypted block
	var block; // current block number

	if (!ciphertext || !key || typeof ciphertext == "string")
		return;
	if (key.length * 8 != keySizeInBits)
		return;
	if (!mode) {
		mode = "ECB"; // assume ECB if mode omitted
	}

	expandedKey = keyExpansion(key);

	// work backwards to accomodate CBC mode
	for (block = (ciphertext.length / bpb) - 1; block > 0; block--) {
		aBlock = decrypt(ciphertext.slice(block * bpb, (block + 1) * bpb),
				expandedKey);
		if (mode == "CBC")
			for (var i = 0; i < bpb; i++)
				pt[(block - 1) * bpb + i] = aBlock[i]
						^ ciphertext[(block - 1) * bpb + i];
		else
			pt = aBlock.concat(pt);
	}

	// do last block if ECB (skips the IV in CBC)
	if (mode == "ECB")
		pt = decrypt(ciphertext.slice(0, bpb), expandedKey).concat(pt);

	return pt;
}

/** AES IMPLEMNETATION END * */

/** CRYPT BEGIN * */

function setKey(key) {
	var hs = "";
	var bogus = false;
	var s = key;
	var hexDigits = "0123456789abcdefABCDEF";
	for (i = 0; i < s.length; i++) {
		var c = s.charAt(i);
		if (hexDigits.indexOf(c) >= 0) {
			hs += c;
		} else {
			bogus = true;
		}
	}
	if (bogus) {
		alert("Error: Improper character(s) in hexadecimal key.");
	}
	if (hs.length > (keySizeInBits / 4)) {
		alert("Warning: hexadecimal key exceeds " + (keySizeInBits / 4)
				+ " digit maximum; truncated.");
		document.key.text.value = hs = hs.slice(0, 64);
	} else {
		// If key is fewer than 64 hex digits, fill it with zeroes
		while (hs.length < (keySizeInBits / 4)) {
			hs += "0";
		}
	}
	return hexToByteArray(hs);
}

function Encrypt(key, plaintext) {
	var v, i;
	var hexDigits = "0123456789ABCDEF";
	if (key.length == 0) {
		alert("Please specify a key with which to encrypt the message.");
		return;
	}
	if (plaintext.length == 0) {
		alert("No plain text to encrypt!  Please enter or paste plain text in the field above.");
		return;
	}
	cipher = "";
	key = setKey(key);
	var ct = rijndaelEncrypt(plaintext, key, "ECB");
	cipher = byteArrayToHex(ct);
	return cipher;
}

// Decrypt ciphertext with key, place result in plaintext field
function Decrypt() {
	if (document.key.text.value.length == 0) {
		alert("Please specify a key with which to decrypt the message.");
		return;
	}
	if (document.cipher.text.value.length == 0) {
		alert("No cipher text to decrypt!  Please enter or paste cipher text in the field above.");
		return;
	}
	document.plain.text.value = "";
	setKey();
	var ct = new Array(), kt;
	ct = hexToByteArray(document.cipher.text.value);
	var result = rijndaelDecrypt(ct, key, "ECB");
}
function getCountryCode() {
	return $$('_CN').value;
}
function passEncrypt(_pwd, ranNum) {
	var hash = "";
	var _encPwd = "";
	if (trim(_pwd) != "") {
		hash = sha256_digest(_pwd);
		_encPwd = "";
		_encPwd = Encrypt(ranNum, hash);
	} else {
		_encPwd = _pwd;
	}
	return _encPwd;
}

var objappVersion = navigator.appVersion;
var objAgent = navigator.userAgent;
var objbrowserName = navigator.appName;
var objfullVersion = '' + parseFloat(navigator.appVersion);
var objBrMajorVersion = parseInt(navigator.appVersion, 10);
var objOffsetName, objOffsetVersion, ix;

function checkbrowser() {

	// In Chrome
	if ((objOffsetVersion = objAgent.indexOf(CHROME)) != -1) {
		objbrowserName = CHROME;
		objfullVersion = objAgent.substring(objOffsetVersion + 7);
	}
	// In Microsoft internet explorer
	else if ((objOffsetVersion = objAgent.indexOf(MSIE)) != -1) {
		objbrowserName = IE;
		objfullVersion = objAgent.substring(objOffsetVersion + 5);
	} // In Firefox
	else if ((objOffsetVersion = objAgent.indexOf(FIREFOX)) != -1) {
		objbrowserName = FIREFOX;
	}
	// In Safari
	else if ((objOffsetVersion = objAgent.indexOf(SAFARI)) != -1) {
		objbrowserName = SAFARI;
		objfullVersion = objAgent.substring(objOffsetVersion + 7);
		if ((objOffsetVersion = objAgent.indexOf("Version")) != -1) {
			objfullVersion = objAgent.substring(objOffsetVersion + 8);
		}
	}
	// For other browser "name/version" is at the end of userAgent
	else if ((objOffsetName = objAgent.lastIndexOf(' ') + 1) < (objOffsetVersion = objAgent
			.lastIndexOf('/'))) {
		objbrowserName = objAgent.substring(objOffsetName, objOffsetVersion);
		objfullVersion = objAgent.substring(objOffsetVersion + 1);
		if (objbrowserName.toLowerCase() == objbrowserName.toUpperCase()) {
			objbrowserName = navigator.appName;
		}
	} // trimming the fullVersion string at semicolon/space if present
	if ((ix = objfullVersion.indexOf(";")) != -1)
		objfullVersion = objfullVersion.substring(0, ix);
	if ((ix = objfullVersion.indexOf(" ")) != -1)
		objfullVersion = objfullVersion.substring(0, ix);
	objBrMajorVersion = parseInt('' + objfullVersion, 10);
	if (isNaN(objBrMajorVersion)) {
		objfullVersion = '' + parseFloat(navigator.appVersion);
		objBrMajorVersion = parseInt(navigator.appVersion, 10);
	}

}

function showDialog(url, value, property) {

	if (objbrowserName == CHROME) {
		sessionStorage.setItem("sent", value.gridval);
		var i = 0;
		for ( var a in value) {
			sessionStorage.setItem("sent" + i, value[a]);
			sessionStorage.setItem("sentVar" + i, a);
			i++;
		}
		sessionStorage.setItem("sentLenth", i);
		window.open(url, "_blank", property);
	} else if (objbrowserName == IE) {

		var path = location.pathname;
		path = path.split("/");

		var full = location.protocol + '//' + location.hostname
				+ (location.port ? ':' + location.port : '');
		url = full + '/' + path[1] + '/' + url;
		window.showModalDialog(url, value, property);
	} else {
		window.showModalDialog(url, value, property);

	}
	return;

}
function getModalDialogvalue() {
	if (objbrowserName == CHROME) {

		var myObject = new Object();
		var val = sessionStorage.getItem("sentLenth");
		for (var i = 0; i <= val; i++) {

			myObject[sessionStorage.getItem("sentVar" + i)] = sessionStorage
					.getItem("sent" + i);
			sessionStorage.removeItem("sentVar" + i);
			sessionStorage.removeItem("sent" + i);
		}
		sessionStorage.removeItem("sentLenth");

		return myObject;
	} else {

		var oMyObject = window.dialogArguments;
		return oMyObject;

	}
}

/** CRYPT END * */

// Popup windows close begins-
function openWindow(newUrl, w, h) {

	openWindows[openWindows.length] = window
			.open(
					newUrl,
					"_blank",
					"width="
							+ w
							+ ",height="
							+ h
							+ ",menubar=no,top=0,left=0,channelmode=yes,directories=no,fullscreen=yes,location=no,menubar=no,resizable=no,scrollbars=no,status=no,titlebar=no,toolbar=no");
}

function closeChildWindows() {

	if (openWindows.length > 0) {
		for (var i = 0; i < openWindows.length; i++) {
			openWindows[i].window.close();
		}
	}
}

// Popup windows close ends-

function round(value, exp) {
	if (typeof exp === 'undefined' || +exp === 0)
		return Math.round(value);

	value = +value;
	exp = +exp;

	if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0))
		return NaN;

	// Shift
	value = value.toString().split('e');
	value = Math
			.round(+(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp)));

	// Shift back
	value = value.toString().split('e');
	return +(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp));
}

/** EDITING IS STRICTLY PROHIBITED * */
