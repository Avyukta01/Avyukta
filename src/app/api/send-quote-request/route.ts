
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const {
      fullName,
      email,
      companyName,
      phoneNumber,
      interestedService,
      projectDetails
    } = await request.json();

    if (!fullName || !email || !interestedService || !projectDetails) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    // 🔐 Ensure your environment has these variables set for real SMTP
    const envSmtpHost = process.env.SMTP_HOST;
    const envSmtpUser = process.env.SMTP_USER;
    const envSmtpPass = process.env.SMTP_PASS;
    const envSmtpPort = Number(process.env.SMTP_PORT) || 587; // Default to 587 for TLS
    const envSmtpSecure = process.env.SMTP_SECURE === 'true'; // true for 465 (SSL), false for 587 (STARTTLS)

    if (!envSmtpHost || !envSmtpUser || !envSmtpPass) {
      console.error('SMTP configuration is incomplete. Please check environment variables: SMTP_HOST, SMTP_USER, SMTP_PASS.');
      return NextResponse.json(
        { message: 'Email service is not configured. Please contact the site administrator.' },
        { status: 500 }
      );
    }

    // ✅ Real transporter setup using provided SMTP credentials
    const transporter = nodemailer.createTransport({
      host: envSmtpHost,
      port: envSmtpPort,
      secure: envSmtpSecure, // true for 465, false for other ports like 587
      auth: {
        user: envSmtpUser,
        pass: envSmtpPass,
      },
      connectionTimeout: 10000, // 10 seconds
      socketTimeout: 10000,    // 10 seconds
    });

    console.log(`Attempting to send email via ${envSmtpHost}:${envSmtpPort}`);

    const mailOptions = {
      from: process.env.EMAIL_FROM || `"${fullName} via Voxaiomni Quote" <${envSmtpUser}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || envSmtpUser, // Target recipient
      subject: `New Quote Request: ${interestedService} from ${companyName || fullName}`,
      html: `
        <h1>New Quote Request</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${companyName ? `<p><strong>Company Name:</strong> ${companyName}</p>` : ''}
        ${phoneNumber ? `<p><strong>Phone Number:</strong> ${phoneNumber}</p>` : ''}
        <p><strong>Interested Service:</strong> ${interestedService}</p>
        <p><strong>Project Details:</strong></p>
        <p>${projectDetails.replace(/\n/g, '<br>')}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully using configured SMTP. Message ID:", info.messageId);

    return NextResponse.json(
      { message: 'Quote request submitted successfully! We will be in touch soon.' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    let errorMessage = 'Failed to send quote request.';
    if (error instanceof Error) {
      errorMessage = `${errorMessage} Error: ${error.message}`;
    }
     // Log the detailed error on the server but provide a generic message to the client
    console.error('Detailed error for admin:', error);
    return NextResponse.json(
      {
        message: 'Failed to send quote request due to a server error. Please try again later or contact support.',
      },
      { status: 500 }
    );
  }
}
