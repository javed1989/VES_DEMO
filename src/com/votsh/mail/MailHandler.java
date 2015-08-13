package com.votsh.mail;

public interface MailHandler {

	void sendMail(MailInfo mailInfo);
	
	void sendMailWithDefaultUser(MailInfo mailInfo);
}
