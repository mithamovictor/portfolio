'use server';

import { revalidatePath } from 'next/cache';
import axios from 'axios';
import { DevToArticle } from '@/app/components/PostsList';
import { SendSmtpEmail, TransactionalEmailsApi } from '@getbrevo/brevo';
const { DEV_TO_API_KEY_PORTFOLIO, BREVO_API_KEY_PORTFOLIO, DEV_TO_API_URL, DEV_TO_API_KEY, BREVO_API_KEY } =
  process.env;

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
    await sendNotification({ firstName, lastName, email, message });

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
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sora', 'Inter', Arial, sans-serif; background-color: #16213e; color: #F8FAFC; padding: 20px; margin: 0; }
      .container { max-width: 600px; margin: 0 auto; background-color: #0f3460; border-radius: 16px; border: 1px solid rgba(15, 52, 96, 0.5); overflow: hidden; }
      .header { background-color: rgba(22, 33, 62, 0.8); padding: 30px; text-align: center; border-bottom: 1px solid rgba(255, 183, 3, 0.1); }
      .logo { font-family: 'Tangerine', cursive; font-size: 24px; font-weight: 700; color: #ffb703; text-decoration: none; }
      .content { padding: 40px; }
      .details { background: rgba(22, 33, 62, 0.5); padding: 24px; border-radius: 12px; border: 1px solid rgba(15, 52, 96, 0.3); }
      .label { font-weight: 700; color: #ffb703; display: block; margin-bottom: 4px; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; }
      .value { color: #F8FAFC; margin-bottom: 20px; font-size: 16px; }
      .message { white-space: pre-wrap; color: #F8FAFC; line-height: 1.6; }
      .footer { text-align: center; padding: 20px; color: #94A3B8; font-size: 12px; }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">Mithamo Victor</div>
      </div>
      <div class="content">
        <h2 style="color: #ffb703; margin-top: 0;">New Inquiry</h2>
        <p style="color: #94A3B8; margin-bottom: 30px;">You have received a new message from your portfolio site.</p>

        <div class="details">
          <span class="label">From</span>
          <div class="value">${escapeHtml(name)}</div>

          <span class="label">Email</span>
          <div class="value">${escapeHtml(email)}</div>

          <span class="label">Message</span>
          <div class="message">${escapeHtml(message)}</div>
        </div>
      </div>
      <div class="footer">
        &copy; ${new Date().getFullYear()} Mithamo Victor. Internal Notification.
      </div>
    </div>
  </body>
</html>
`.trim();

  const responseEmail = `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Thank You - Mithamo Victor</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Tangerine:wght@400;700&display=swap" rel="stylesheet">
    <style>
      body { font-family: 'Sora', 'Inter', Arial, sans-serif; background-color: #16213e; color: #F8FAFC; padding: 20px; margin: 0; }
      .container { max-width: 600px; margin: 0 auto; background-color: #0f3460; border-radius: 16px; border: 1px solid rgba(15, 52, 96, 0.5); overflow: hidden; }
      .header { background-color: rgba(22, 33, 62, 0.8); padding: 40px; text-align: center; border-bottom: 1px solid rgba(255, 183, 3, 0.1); }
      .logo { font-family: 'Tangerine', cursive; font-size: 32px; font-weight: 700; color: #ffb703; text-decoration: none; }
      .content { padding: 40px; text-align: center; }
      .thank-you { font-size: 24px; font-weight: 700; color: #ffb703; margin-bottom: 16px; }
      .text { color: #94A3B8; line-height: 1.8; margin-bottom: 30px; font-size: 16px; }
      .button-container { margin: 40px 0; }
      .button { background-color: #ffb703; color: #000000; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; display: inline-block; }
      .footer { text-align: center; padding: 30px; color: #94A3B8; font-size: 12px; border-top: 1px solid rgba(15, 52, 96, 0.3); }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div class="logo">Mithamo Victor</div>
      </div>
      <div class="content">
        <div class="thank-you">Thank You for Reaching Out!</div>
        <p class="text">
          Hi <strong>${firstName}</strong>,<br><br>
          I&apos;ve received your message and I appreciate you taking the time to connect.
          Whether it&apos;s about a new project, a technical challenge, or just to say hi,
          I&apos;ll get back to you as soon as possible.
        </p>
        <div class="button-container">
          <a href="https://mithamo.dev" class="button" style="background-color: transparent; border: 1px solid #ffb703; color: #ffb703;">Visit My Portfolio</a>
          <a href="https://calendly.com/hello-mithamo/30min" class="button" style="background-color: transparent; border: 1px solid #ffb703; color: #ffb703; margin-left: 10px;">Schedule a Call</a>
        </div>
        <div style="margin-top: 20px;">
          <a href="https://www.buymeacoffee.com/vmithamo" target="_blank" style="text-decoration: none;">
            <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 40px !important; width: 145px !important;">
          </a>
        </div>
      </div>
      <div class="footer">
        Enterprise-grade Java backends, modern React frontends.<br>
        &copy; ${new Date().getFullYear()} Victor Mithamo. All rights reserved.
      </div>
    </div>
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
  const emailAPI = new TransactionalEmailsApi();
  emailAPI.setApiKey(0, BREVO_API_KEY_PORTFOLIO || BREVO_API_KEY || '');

  const smtpEmail = new SendSmtpEmail();
  smtpEmail.subject = subject;
  smtpEmail.htmlContent = htmlContent;
  smtpEmail.sender = { name: "Mithamo's Portfolio", email: 'hello@mithamo.cc' }; // must be verified
  smtpEmail.to = [{ email: to }];
  smtpEmail.replyTo = { email: 'hello@mithamo.cc', name: "Mithamo's Portfolio" };

  try {
    const response = await emailAPI.sendTransacEmail(smtpEmail);
    console.log(`Email sent successfully: ${JSON.stringify(response.body)}`);
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(`Failed to send email: ${error.message}`, error.stack);
    } else {
      console.error('Failed to send email: Unknown error', error);
    }
    throw error;
  }
};

export const fetchPosts = async (): Promise<DevToArticle[] | undefined> => {
  try {
    const response = await axios.get(DEV_TO_API_URL || '', {
      headers: { 'api-key': DEV_TO_API_KEY_PORTFOLIO || DEV_TO_API_KEY },
    });

    return response.data;
  } catch (e) {
    console.error('Error fetching articles:', e);
  }
};
