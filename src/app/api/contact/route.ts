import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, service, message, timeline } = body;

    // Validate required fields
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid business email address is required." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Please provide a brief description of your project (min 10 characters)." },
        { status: 400 }
      );
    }

    // Structured logging for enquiry tracking
    const inquiryPayload = {
      timestamp: new Date().toISOString(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : null,
      service: service || "General Inquiry",
      message: message.trim(),
      timeline: timeline || "Not specified",
    };

    console.log("[INQUIRY_RECEIVED]", JSON.stringify(inquiryPayload));

    // Ready for SMTP / Resend / Webhook dispatch
    // In production, integrate process.env.RESEND_API_KEY or SMTP here.

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. The RK TECHNOCRAFT engineering team has received your project details and will review them shortly.",
        receivedAt: inquiryPayload.timestamp,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[INQUIRY_ERROR]", error);
    return NextResponse.json(
      { error: "An unexpected error occurred while submitting your message. Please try again or reach out directly." },
      { status: 500 }
    );
  }
}
