package com.votsh.support;

import com.votsh.mail.MailHandler;
import com.votsh.mail.MailHandlerFactory;
import com.votsh.mail.MailInfo;
import com.votsh.mail.MailType;

public class Emailer {

	public static void sendMail(String toAddress) {
		final MailHandler mailHandler = MailHandlerFactory
				.getMailSender(MailType.SSL);
		final MailInfo mailInformation = new MailInfo();
		mailInformation.setHost("smtp.gmail.com");
		mailInformation.setPort("465");
		mailInformation.setFromAddress("learngpoint@gmail.com");
		mailInformation.setPassword("ganeshdino");
		mailInformation.setSubject("Testing Subject");
		mailInformation.setToAddress(toAddress);
		mailInformation
				.setMessage("Dear Mail Crawler,\n\n Greeting from zeptoh");
		mailHandler.sendMail(mailInformation);
		System.out.println("done");
	}
	
	/*public static void main(String args[]){
		sendMail("venky@zeptoh.com");
	}*/
}
