import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  const {
    fullName,
    email,
    companyName,
    phoneNumber,
    interestedService,
    projectDetails,
  } = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp-relay.sendinblue.com', // Brevo SMTP host
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: 'testing.web@dialerindia.com',
      pass: 'testing.web@2133',
    },
  });

  try {
    await transporter.sendMail({
      from: 'testing.web@dialerindia.com',
      to: 'testing.web@dialerindia.com', // Send to the same email for testing
      subject: `New Quote Request from ${fullName}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Company Name:</strong> ${companyName}</p>
        <p><strong>Phone Number:</strong> ${phoneNumber}</p>
        <p><strong>Interested Service:</strong> ${interestedService}</p>
        <p><strong>Project Details:</strong> ${projectDetails}</p>
      `,
    });

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
  } catch (error) {
    console.error('Failed to send email:', error);
    if (error instanceof Error) {
      console.error('Error message:', error.message);
      if (error.stack) {
        console.error('Error stack:', error.stack);
      }
    }
    return NextResponse.json({ message: 'Failed to send email' }, { status: 500 });
  }
} 