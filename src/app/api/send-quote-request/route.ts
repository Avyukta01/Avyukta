
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

    console.log("Attempting to configure email transport...");
    // Check if essential SMTP environment variables are set
    const smtpHostSet = !!process.env.SMTP_HOST;
    const smtpUserSet = !!process.env.SMTP_USER;
    const smtpPassSet = !!process.env.SMTP_PASS; // Check for presence, not value

    console.log("SMTP_HOST environment variable:", smtpHostSet ? "Set" : "Not Set");
    console.log("SMTP_USER environment variable:", smtpUserSet ? "Set" : "Not Set");
    console.log("SMTP_PASS environment variable:", smtpPassSet ? "Set (exists)" : "Not Set (or empty)");


    if (smtpHostSet && smtpUserSet && smtpPassSet) {
      console.log("Attempting to use REAL SMTP server based on provided environment variables.");
      // Use real SMTP server if credentials are provided
      transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT) || 587,
        secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
    } else {
      // Use Ethereal for local testing if SMTP_HOST is not set
      isEthereal = true;
      console.warn("One or more SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS) are not set. Falling back to Ethereal for local email testing.");
      const testAccount = await nodemailer.createTestAccount();
      transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // Ethereal uses port 587 with STARTTLS
        auth: {
          user: testAccount.user, // Generated Ethereal user
          pass: testAccount.pass, // Generated Ethereal password
        },
      });
      console.log("Ethereal test account created: User - %s, Pass - %s", testAccount.user, testAccount.pass);
    }

    const mailOptions = {
      from: `"${fullName} via Voxaiomni Quote" <${process.env.EMAIL_FROM || 'quote-form@voxaiomni.com'}>`,
      replyTo: email,
      to: process.env.EMAIL_TO || 'dineshbaghel6251@gmail.com', // This will be the recipient.
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
      // It's good practice to include the preview URL in the response for easier testing if needed
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
    return NextResponse.json({ message: 'Failed to send quote request.', error: errorMessage }, { status: 500 });
  }
}
