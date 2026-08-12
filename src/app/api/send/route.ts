import type { NextRequest } from "next/server";
import { Resend } from "resend";
import { contactFormApiSchema } from "../../../lib/validation";
import { generateCustomerConfirmationEmail, generateContactEmail } from "../../../lib/emails";

const resend = new Resend(process.env.RESEND_API_KEY);

interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  phone?: string;
  message: string;
  submissionId?: number;
  submittedAt?: string;
}

interface ApiResponse {
  success?: boolean;
  error?: string;
  customerEmailId?: string;
  salesEmailId?: string;
  details?: any;
}

export async function POST(request: NextRequest): Promise<Response> {
  console.log('🚀 API /api/send called with request');
  try {
    const { data }: { data: ContactFormData } = await request.json();
    console.log('📥 Received data:', data);

    if (!data) {
      return Response.json(
        {
          error: "Missing form data",
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Validate form data with Zod
    const validationResult = contactFormApiSchema.safeParse(data);

    if (!validationResult.success) {
      const errors = validationResult.error.format();
      const errorMessages: string[] = [];

      if (errors.name?._errors?.[0]) errorMessages.push(errors.name._errors[0]);
      if (errors.email?._errors?.[0]) errorMessages.push(errors.email._errors[0]);
      if (errors.company?._errors?.[0]) errorMessages.push(errors.company._errors[0]);
      if (errors.phone?._errors?.[0]) errorMessages.push(errors.phone._errors[0]);
      if (errors.message?._errors?.[0]) errorMessages.push(errors.message._errors[0]);

      return Response.json(
        {
          error: errorMessages.join(". ") || "Invalid form data",
        } as ApiResponse,
        { status: 400 }
      );
    }

    // Send customer confirmation email
    const { data: customerData, error: customerError } = await resend.emails.send({
      from: "Ancile <noreply@ancile.io>",
      to: [data.email],
      subject: "Thank you for your inquiry - Ancile",
      html: generateCustomerConfirmationEmail(data.name, data.company),
    });

    if (customerError) {
      console.error("Customer email error:", customerError);
      return Response.json(
        {
          error: "Failed to send customer confirmation email",
          details: customerError,
        } as ApiResponse,
        { status: 500 }
      );
    }

    // Send sales notification email
    const { data: salesData, error: salesError } = await resend.emails.send({
      from: "Ancile Notifications <notifications@ancile.io>",
      to: ["sales@ancile.io"],
      subject: `🚨 New Business Inquiry: ${data.company || data.name}`,
      html: generateContactEmail(
        data.name,
        data.email,
        data.company || "",
        data.message,
        data.phone,
        data.submissionId,
        data.submittedAt
      ),
      replyTo: data.email,
    });

    if (salesError) {
      console.error("Sales email error:", salesError);
      return Response.json(
        {
          error: "Failed to send sales notification email",
          details: salesError,
        } as ApiResponse,
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      customerEmailId: customerData?.id,
      salesEmailId: salesData?.id,
    } as ApiResponse);
  } catch (error) {
    console.error("API route error:", error);
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";

    return Response.json(
      {
        error: "Internal server error",
        details: errorMessage,
      } as ApiResponse,
      { status: 500 }
    );
  }
}
