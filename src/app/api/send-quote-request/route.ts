
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, companyName, phoneNumber, interestedService, projectDetails } = await request.json();

    // Validate required fields (basic validation, Zod could be used for more complex validation)
    if (!fullName || !email || !interestedService || !projectDetails) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"${fullName} via Voxaiomni Quote" <${process.env.EMAIL_FROM}>`, // Use EMAIL_FROM or a generic sender
      replyTo: email, // Set reply-to to the user's email
      to: process.env.EMAIL_TO,
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

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Quote request submitted successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    // Check for specific error types if needed
    let errorMessage = 'Failed to send quote request.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    return NextResponse.json({ message: 'Failed to send quote request.', error: errorMessage }, { status: 500 });
  }
}
