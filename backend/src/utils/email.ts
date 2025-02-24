import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS,
  },
});

export async function sendReferralEmail(
  referrerName: string,
  referrerEmail: string,
  refereeName: string,
  refereeEmail: string,
  program: string
) {
  const mailOptions = {
    from: process.env.GMAIL_USER,
    to: refereeEmail,
    subject: `${referrerName} has referred you to ${program} at Accredian`,
    html: `
      <h1>You've been referred to Accredian!</h1>
      <p>${referrerName} (${referrerEmail}) has referred you to the ${program} program at Accredian.</p>
      <p>Visit our website to learn more and enroll!</p>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Referral email sent successfully');
  } catch (error) {
    console.error('Error sending referral email:', error);
    throw error;
  }
}