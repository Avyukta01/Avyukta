
import { type NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { fullName, email, companyName, phoneNumber, interestedService, projectDetails } = await request.json();

    // Validate required fields
    if (!fullName || !email || !interestedService || !projectDetails) {
      return NextResponse.json({ message: 'Missing required fields.' }, { status: 400 });
    }

    let transporter;
    let isEthereal = false;

    console.log("--- Checking SMTP Configuration ---");
    console.log("Attempting to configure email transport...");

    const envSmtpHost = process.env.SMTP_HOST;
    const envSmtpUser = process.env.SMTP_USER;
    const envSmtpPass = process.env.SMTP_PASS;

    console.log(`Value of SMTP_HOST: ${envSmtpHost || 'Not Set/Empty'}`);
    console.log(`Value of SMTP_USER: ${envSmtpUser || 'Not Set/Empty'}`);
    console.log(`SMTP_PASS is present and non-empty: ${!!envSmtpPass}`);


    if (envSmtpHost && envSmtpUser && envSmtpPass) {
      console.log("Attempting to use REAL SMTP server based on provided environment variables.");
      transporter = nodemailer.createTransport({
        host: envSmtpHost,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: envSmtpUser,
          pass: envSmtpPass,
        },
        // Adding timeout options for debugging
        connectionTimeout: 10000, // 10 seconds
        socketTimeout: 10000, // 10 seconds
      });
    } else {
      isEthereal = true;
      console.warn("One or more SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not set or are empty. Falling back to Ethereal for local email testing.");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      console.log("Ethereal test account created: User - %s, Pass - %s", testAccount.user, testAccount.pass);
    }

    const mailOptions = {
      from: `"${fullName} via Voxaiomni Quote" <${process.env.EMAIL_FROM || 'quote-form@voxaiomni.com'}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || 'dineshbaghel6251@gmail.com',
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

    console.log("Sending email with the following options:", {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      isEthereal: isEthereal,
    });

    const info = await transporter.sendMail(mailOptions);

    if (isEthereal) {
      const previewUrl = nodemailer.getTestMessageUrl(info);
      console.log('Message sent via Ethereal! Preview URL: %s', previewUrl);
      return NextResponse.json({
        message: 'Quote request processed using local test service (Ethereal). Check your server console for the email preview URL.',
        previewUrl: previewUrl
      }, { status: 200 });
    }

    console.log("Real email sent successfully via SMTP. Message ID:", info.messageId);
    return NextResponse.json({ message: 'Quote request submitted successfully! Email sent.' }, { status: 200 });

  } catch (error) {
    console.error('Error sending email:', error);
    let errorMessage = 'Failed to send quote request.';
    if (error instanceof Error) {
        errorMessage = error.message;
    }
    // If it's an Ethereal error, it's less critical for the user than a real SMTP error.
    // However, the generic message remains.
    return NextResponse.json({ message: 'Failed to send quote request.', error: errorMessage }, { status: 500 });
  }
}
