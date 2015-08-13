package com.votsh.mail;

import java.util.Properties;
import java.util.ResourceBundle;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.PasswordAuthentication;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

public abstract class AbstractMailHandler implements MailHandler {
	
	protected static final String SMTP_HOST_KEY = "mail.smtp.host";
	protected static final String SMTP_AUTH_KEY = "mail.smtp.auth";
	protected static final String SMTP_PORT_KEY = "mail.smtp.port";
	
	protected abstract Properties getProperties(final MailInfo mailInfo);
	
	@Override
	public void sendMail(final MailInfo mailInfo) {
		final Properties properties = getProperties(mailInfo);
		sendMailIntern(mailInfo, properties);
	}
	
	@Override
	public void sendMailWithDefaultUser(final MailInfo mailInfo) {
		final ResourceBundle resourceBundle = ResourceBundle.getBundle("com.fpl.mail.config.mailconfig");
		final String defaultEmail = resourceBundle.getString("DEFAULR_MAIL_ID");
		final String encryptedPassword = resourceBundle.getString("DEFAULR_MAIL_PASSWORD");
		final String mailPassword = encryptedPassword;
		final String host = resourceBundle.getString("DEFAULT_HOST");
		final String port = resourceBundle.getString("DEFAULT_PORT");
		mailInfo.setFromAddress(defaultEmail);
		//mailInfo.setPassword(mailPassword);
		mailInfo.setHost(host);
		mailInfo.setPort(port);
		final Properties properties = getProperties(mailInfo);
		sendMailIntern(mailInfo, properties);
	}
	
	private void sendMailIntern(final MailInfo mailInfo, final Properties properties) {
		final Session session = Session.getDefaultInstance(properties, new javax.mail.Authenticator() {
			@Override
			protected PasswordAuthentication getPasswordAuthentication() {
				return new PasswordAuthentication(mailInfo.getFromAddress(),mailInfo.getPassword());
			}
		});
		try {
			final Message message = new MimeMessage(session);
			message.setFrom(new InternetAddress(mailInfo.getFromAddress()));
			System.out.println(mailInfo.getToAddress());
			message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(mailInfo.getToAddress()));
			message.setSubject(mailInfo.getSubject());
			message.setText(mailInfo.getMessage());
			Transport.send(message);
		} catch (final MessagingException e) {
			throw new RuntimeException(e);
		}
	}
}
