'use server';

import nodemailer, { SentMessageInfo } from 'nodemailer';
import { revalidatePath } from 'next/cache';
import axios from 'axios';
import { DevToArticle } from '@/app/components/PostsList';

type FormDataDetails = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export const submitContactForm: (formData: FormData) => Promise<{ message: string }> = async (
  formData: FormData,
): Promise<{ message: string }> => {
  const isInvalidText = (text: string): boolean => !text || text.trim() === '';

  // Validate email format using regex
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return emailRegex.test(email);
  };

  // Extract contact details from formData
  const firstName = formData.get('firstName')?.toString() || '';
  const lastName = formData.get('lastName')?.toString() || '';
  const email = formData.get('email')?.toString() || '';
  const message = formData.get('message')?.toString() || '';

  // Field validations
  if (isInvalidText(firstName)) {
    return { message: 'First name is required.' };
  }

  if (isInvalidText(lastName)) {
    return { message: 'Last name is required.' };
  }

  if (isInvalidText(email)) {
    return { message: 'Email is required.' };
  }

  if (!isValidEmail(email)) {
    return { message: 'Invalid email format.' };
  }

  if (isInvalidText(message)) {
    return { message: 'Message is required.' };
  }

  try {
    // Send notification
    await sendNotification({
      firstName,
      lastName,
      email,
      message,
    });

    // Revalidate paths or trigger other side effects
    revalidatePath('/contact', 'layout'); // Adjust based on your revalidation method

    return { message: 'Success' };
  } catch (error) {
    console.error('Error processing contact form:', error);
    return { message: 'Failed to process contact form' };
  }
};

const sendNotification: (formDataDetails: FormDataDetails) => Promise<void> = async (
  formDataDetails: FormDataDetails,
): Promise<void> => {
  const { GMAIL_USER, GMAIL_PASSWORD } = process.env;

  const { firstName, lastName, email, message } = formDataDetails;

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

export const fetchPosts = async (): Promise<DevToArticle[]|undefined> => {
  const { DEV_TO_API_KEY } = process.env;
  try {
    const url = 'https://dev.to/api/articles/me/all';

    const response = await axios.get(url, {
      headers: { 'api-key': DEV_TO_API_KEY },
    });

    return response.data;
  } catch (e) {
    console.error('Error fetching articles:', e);
  }
};
