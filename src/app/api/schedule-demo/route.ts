import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, phoneNumber, product, date, timeSlot } = await req.json();

    // Format the date
    const formattedDate = new Date(date).toLocaleDateString();

    // 1. Send form details to Admin WhatsApp
    const adminPhone = '9588922752'; 
    const adminMsg = ` New Demo Request:\n\n Product: ${product}\n Date: ${formattedDate}\n Time Slot: ${timeSlot}\n Email: ${email}\n Phone: ${phoneNumber}`;
    const encodedAdminMsg = encodeURIComponent(adminMsg);
    const adminUrl = `https://wa.clouddialer.in/api/send?number=91${adminPhone}&type=text&message=${encodedAdminMsg}&instance_id=673B2D67E7616&access_token=67037ac5e67ca`;

    await fetch(adminUrl, {
      method: 'GET',
      headers: { 'x-api-key': '34543545' },
    });

    // 2. Send Thank You message to User WhatsApp
    const thankYouMsg = ` Thank you for booking a demo of ${product}! Our team will contact you shortly to confirm the appointment.`;
    const encodedThankYouMsg = encodeURIComponent(thankYouMsg);
    const userUrl = `https://wa.clouddialer.in/api/send?number=91${phoneNumber}&type=text&message=${encodedThankYouMsg}&instance_id=673B2D67E7616&access_token=67037ac5e67ca`;

    await fetch(userUrl, {
      method: 'GET',
      headers: { 'x-api-key': '34543545' },
    });

    return NextResponse.json({ message: "WhatsApp messages sent successfully" });
  } catch (error) {
    console.error("Error sending WhatsApp messages:", error);
    return NextResponse.json({ error: "Failed to send WhatsApp messages" }, { status: 500 });
  }
}
