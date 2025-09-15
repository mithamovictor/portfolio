'use server';

import { revalidatePath } from 'next/cache';
import axios from 'axios';
import { DevToArticle } from '@/app/components/PostsList';
import { SendSmtpEmail, TransactionalEmailsApi } from '@getbrevo/brevo';
const { DEV_TO_API_KEY_PORTFOLIO, BREVO_API_KEY_PORTFOLIO } = process.env;

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
  const { firstName, lastName, email, message } = formDataDetails;

  const name = `${firstName} ${lastName}`;
  const subject = `Portfolio contact form from - ${name}`;
  const escapeHtml = (str = '') =>
    String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');

  const fullHtml = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Contact Message</title>
    <style>
      body { font-family: Arial, Helvetica, sans-serif; color: #111; padding: 20px; }
      .container { max-width: 680px; margin: 0 auto; }
      .details { background:#f9f9f9; padding:12px; border-radius:6px; }
      .label { font-weight:700; }
      .message { white-space: pre-wrap; margin-top:8px; }
    </style>
  </head>
  <body>
    <div class="container">
      <p>Hi Victor,</p>

      <p>Please receive the following message via your portfolio contact form:</p>

      <div class="details">
        <p><span class="label">Name:</span> ${escapeHtml(name)}</p>
        <p><span class="label">Email:</span> ${escapeHtml(email)}</p>
        <p><span class="label">Message:</span></p>
        <div class="message">${escapeHtml(message)}</div>
      </div>

      <p>Regards,<br/>${escapeHtml(name)}</p>
    </div>
  </body>
</html>
`.trim();

  const responseEmail = `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Thank You</title>
</head>
<body style="font-family: Arial, sans-serif; background-color: #f9fafb; padding: 20px; color: #333;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; box-shadow: 0 2px 6px rgba(0,0,0,0.1);">
    <tr>
      <td style="padding: 30px; text-align: center;">
        <h2 style="color: #111827; margin-bottom: 20px;">Thank You for Reaching Out!</h2>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 20px;">
          Hi <strong>${firstName}</strong>,<br><br>
          I’ve received your message through my contact form. I truly appreciate you taking the time to reach out.
        </p>
        <p style="font-size: 16px; line-height: 1.5; margin-bottom: 30px;">
          I’ll get back to you as soon as possible.
        </p>
        <p style="font-size: 14px; color: #6b7280; margin-top: 20px;">
          Regards,<br>
          Victor Mithamo
        </p>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();

  await sendSmtpEmail('hello@mithamo.cc', subject, fullHtml);
  await sendSmtpEmail(email, subject, responseEmail);
};

const sendSmtpEmail: (to: string, subject: string, htmlContent: string) => Promise<void> = async (
  to: string,
  subject: string,
  htmlContent: string,
): Promise<void> => {
  const emailAPI: TransactionalEmailsApi = new TransactionalEmailsApi();
  emailAPI.setApiKey(0, BREVO_API_KEY_PORTFOLIO || '');

  const sendSmtpEmail = new SendSmtpEmail();

  sendSmtpEmail.subject = subject;
  sendSmtpEmail.htmlContent = htmlContent;
  sendSmtpEmail.sender = { name: "Mithamo's Portfolio", email: 'hello@mithamo.cc' }; // must be a verified sender
  sendSmtpEmail.to = [{ email: to }];
  sendSmtpEmail.replyTo = { email: 'hello@mithamo.cc', name: "Mithamo's Portfolio" };

  try {
    const response = await emailAPI.sendTransacEmail(sendSmtpEmail);
    console.log(`Email sent successfully: ${JSON.stringify(response.body)}`);
  } catch (error: any) {
    console.log(`Failed to send email: ${error.message}`, error.stack);
    throw error;
  }
};

export const fetchPosts = async (): Promise<DevToArticle[] | undefined> => {
  try {
    const url = 'https://dev.to/api/articles/me/all';

    const response = await axios.get(url, {
      headers: { 'api-key': DEV_TO_API_KEY_PORTFOLIO },
    });

    return response.data;
  } catch (e) {
    console.error('Error fetching articles:', e);
  }
};
