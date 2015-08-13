package com.votsh.access;

public class AccessTest {
	public String decodeXML(String data)
	{System.out.println("from AccessTest:"+data);
	 	if(data==null) return(data);  
	 	
			data = data.replaceAll("& #38;","&");   
			data=data.replaceAll("& #60;","<");
			data = data.replaceAll("& #62;",">");
			data=data.replaceAll("& #40;","\\(");
			data = data.replaceAll("& #41;","\\)");
			data = data.replaceAll("& #34;","\""); 
			data = data.replaceAll("& #39;","\'");
			System.out.println("from AccessTest after decoding:"+data);
			return data;
	}
	
public static void main (String[] args){
	System.out.println();
}
}
