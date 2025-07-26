import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, contact, captchaValue } = body

    // Validate required fields
    if (!name || !contact || !captchaValue) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Verify reCAPTCHA
    const recaptchaResponse = await fetch('https://www.google.com/recaptcha/api/siteverify', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: new URLSearchParams({
        secret: '6LcGco8rAAAAAMXwUJx6rW7H11noKfh32gsV9uVL', // Your production secret key
        response: captchaValue,
      }),
    })

    const recaptchaData = await recaptchaResponse.json()

    if (!recaptchaData.success) {
      return NextResponse.json(
        { error: 'reCAPTCHA verification failed' },
        { status: 400 }
      )
    }

    // Here you would typically:
    // 1. Save the data to your database
    // 2. Send notification emails
    // 3. Integrate with your CRM system
    // 4. Log the call request

    console.log('Call request received:', {
      name,
      contact,
      timestamp: new Date().toISOString(),
    })

    // For now, we'll just return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Call request submitted successfully. We will contact you soon!' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('Error processing call request:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 