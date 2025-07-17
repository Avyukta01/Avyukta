import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const {
      fullName,
      email,
      companyName,
      phoneNumber,
      interestedService,
      projectDetails,
    } = await request.json();

    // 1. WhatsApp to Admin
    const adminPhone = '9588922752'; 
    const adminMessage = ` New Quote Request:\nName: ${fullName}\nEmail: ${email}\nCompany: ${companyName}\nPhone: ${phoneNumber}\nService: ${interestedService}\nDetails: ${projectDetails}`;
    const encodedAdminMsg = encodeURIComponent(adminMessage);

    const adminUrl = `https://wa.clouddialer.in/api/send?number=91${adminPhone}&type=text&message=${encodedAdminMsg}&instance_id=673B2D67E7616&access_token=67037ac5e67ca`;

    await fetch(adminUrl, {
      method: 'GET',
      headers: {
        'x-api-key': '34543545',
      },
    });

    // 2. Thank-you message to User
    const thankYouMsg = ` Thank you, ${fullName}, for choosing our service! We will reach out to you shortly.`;
    const encodedThankYouMsg = encodeURIComponent(thankYouMsg);

    const userUrl = `https://wa.clouddialer.in/api/send?number=91${phoneNumber}&type=text&message=${encodedThankYouMsg}&instance_id=673B2D67E7616&access_token=67037ac5e67ca`;

    await fetch(userUrl, {
      method: 'GET',
      headers: {
        'x-api-key': '34543545',
      },
    });

    return NextResponse.json({ message: 'WhatsApp messages sent successfully' }, { status: 200 });

  } catch (error) {
    console.error('WhatsApp sending failed:', error);
    return NextResponse.json({ message: 'Failed to send WhatsApp messages' }, { status: 500 });
  }
}
