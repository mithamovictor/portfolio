'use server';

import nodemailer, { SentMessageInfo } from 'nodemailer';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

type ContactDetailsType = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export const processContactForm = async (prevState: any, formData: any) => {
  // Utility to validate input text
  const isInvalidText = (text: string): boolean => !text || text.trim() === '';

  // Extract contact details from formData
  const contactDetails: ContactDetailsType = {
    firstName: formData.get('firstName'),
    lastName: formData.get('lastName'),
    email: formData.get('email'),
    message: formData.get('message'),
  };

  // Validation for required fields and email format
  const { firstName, lastName, email, message } = contactDetails;

  if ([firstName, lastName, email, message].some(isInvalidText) || !email.includes('@')) {
    return { message: 'Invalid input' };
  }

  try {
    // Send notification
    await sendNotification(contactDetails);

    // Revalidate paths or trigger other side effects
    revalidatePath('/meals', 'layout'); // Adjust based on your revalidation method
    redirect('/contact'); // Adjust based on your routing setup

    return { message: 'Success' };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return { message: 'Failed to process contact form' };
  }
};

const sendNotification = async (contactDetails: ContactDetailsType): Promise<void> => {
  const { GMAIL_USER, GMAIL_PASSWORD } = process.env;

  if (!GMAIL_USER || !GMAIL_PASSWORD) {
    throw new Error('GMAIL_USER or GMAIL_PASSWORD is not defined in the environment variables.');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: GMAIL_USER,
      pass: GMAIL_PASSWORD,
    },
  });

  try {
    await transporter.verify();
    console.log('SMTP server is ready to send messages.');
  } catch (err) {
    console.error('Error verifying SMTP server:', err);
    throw new Error('SMTP server verification failed.');
  }

  const { firstName, lastName, email, message } = contactDetails;
  const name = `${firstName} ${lastName}`;
  const subject = `Portfolio contact form from - ${name}`;
  const content = `
    Hi Victor,

    Please receive the following message via your portfolio contact form:

    Name: ${name}
    Email: ${email}
    Message: ${message}

    Regards,
    ${name}
  `.trim();

  const mailOptions = {
    from: `${name} <${email}>`,
    to: 'hello@mithamo.cc',
    replyTo: `${name} <${email}>`,
    subject,
    text: content,
  };

  try {
    const info: SentMessageInfo = await transporter.sendMail(mailOptions);
    console.log(`Message sent successfully: ${JSON.stringify(info)}`);
  } catch (error) {
    console.error('Error sending email:', error);
    throw new Error('Failed to send email.');
  }
};
