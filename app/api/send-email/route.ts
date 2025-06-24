import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    // Here you would typically:
    // 1. Validate the input
    // 2. Send an email using a service like SendGrid, Resend, or Nodemailer
    // 3. Store the contact in a database

    // For now, we'll just log the contact and return success
    console.log("Contact form submission:", { name, email, phone, message })

    // Example email sending (you would need to configure your email service)
    /*
    await sendEmail({
      to: 'info@pranachitta.com',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Message:</strong> ${message}</p>
      `
    })
    */

    return NextResponse.json({ success: true, message: "Contact form submitted successfully" })
  } catch (error) {
    console.error("Error processing contact form:", error)
    return NextResponse.json({ success: false, message: "Error processing contact form" }, { status: 500 })
  }
}
