import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const bookingSchema = z.object({
  service: z.string().min(1, "Service is required"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(7, "Invalid phone number"),
  preferredDate: z.string().min(1, "Preferred date is required"),
  notes: z.string().optional(),
});

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const parsed = bookingSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 422 }
      );
    }

    const { service, name, email, phone, preferredDate, notes } = parsed.data;

    // Log booking (replace with DB/email integration in production)
    console.log("[Booking Request]", {
      timestamp: new Date().toISOString(),
      service,
      name,
      email,
      phone,
      preferredDate,
      notes: notes ?? "(none)",
    });

    // TODO: Integrate with email service (e.g., SendGrid, Resend)
    // TODO: Persist to database (e.g., MongoDB, Supabase)

    return NextResponse.json(
      {
        success: true,
        message: `Thank you, ${name}! Your booking request for ${service} on ${preferredDate} has been received. We will contact you at ${email} within 1–2 business days.`,
      },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error. Please try again." },
      { status: 500 }
    );
  }
}

// Reject non-POST methods
export function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
