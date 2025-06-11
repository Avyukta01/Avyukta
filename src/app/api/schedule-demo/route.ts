import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, phoneNumber, product, date, timeSlot } = await req.json();

    // Create a transporter using SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp-relay.brevo.com",
      port: 587,
      secure: false,
      auth: {
        user: "testing.web@dialerindia.com",
        pass: "testing.web@2133",
      },
    });

    // Format the date
    const formattedDate = new Date(date).toLocaleDateString();

    // Email content
    const mailOptions = {
      from: "testing.web@dialerindia.com",
      to: "sales@dialerindia.com",
      subject: "New Demo Request",
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Date:</strong> ${formattedDate}</p>
        <p><strong>Time Slot:</strong> ${timeSlot}</p>
        <p><strong>Contact Details:</strong></p>
        <ul>
          <li>Email: ${email}</li>
          <li>Phone: ${phoneNumber}</li>
        </ul>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Demo request received successfully" });
  } catch (error) {
    console.error("Error scheduling demo:", error);
    return NextResponse.json(
      { error: "Failed to schedule demo" },
      { status: 500 }
    );
  }
} 